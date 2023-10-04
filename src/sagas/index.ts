import { call, put, takeLatest, select, StrictEffect } from 'redux-saga/effects'
import { getProjectInitData, getProjectDescription } from "../services/homeService";
import { calculateBoundingBox, validateProjectItems }  from "../utils/utils";
import { HomeTypes } from '../types/home';
import { RootState } from '../store';

const getState = (state: RootState) => state;

function* fetchData(): Generator<StrictEffect, void, any> {
  yield put({type: "HOME_PROJECT_DESCRIPTION", projectDescription: {}});
  yield put({type: "HOME_LOADING", loading: true});
  
  try {
    const state = yield select(getState);
    let id = state?.projectId;
    if (!state?.projectId) {
      const projectInitData = yield call(getProjectInitData);
      id = projectInitData.id;
    }
    const projectDescription = yield call(getProjectDescription, id);

    if (validateProjectItems(projectDescription?.project?.items)) {
      yield put({type: "HOME_ERROR", error: 'Incorrect data!'});
      yield put({type: "HOME_LOADING", loading: false});
    } else {
      projectDescription?.project?.items.map((item: HomeTypes.ElementProperty) => {
        const boundingBox = calculateBoundingBox(item.width, item.height, item.rotation * (Math.PI / 180));
        item.boundingBox = boundingBox;
        return item;
      });
      
      yield put({type: "HOME_PROJECT_DESCRIPTION", projectDescription: projectDescription});
      yield put({type: "HOME_ERROR", error: null});
      yield put({type: "HOME_LOADING", loading: false});
    }

  } catch (error) {
    yield put({type: "HOME_ERROR", error: 'Error occured!'});
    yield put({type: "HOME_LOADING", loading: false});
  }
}

export default function* projectSaga() {
  yield takeLatest("HOME_PROJECT_ID", fetchData);
}
