import { Dispatch } from "redux";
import { ActionTypes } from '../actionTypes/index';
import { HomeTypes } from "../types/home";

export interface SetHomeProjectDescription {
  type: ActionTypes.HOME_PROJECT_DESCRIPTION;
  projectDescription: HomeTypes.ProjectDescription;
}

export interface SetHomeLoading {
  type: ActionTypes.HOME_LOADING;
  loading: boolean;
}

export interface SetHomeError {
  type: ActionTypes.HOME_ERROR;
  error: HomeTypes.ErrorType;
}

export interface SetHomeProjectId {
  type: ActionTypes.HOME_PROJECT_ID;
  projectId: string;
}

const HomeActions = {

  addProjectDescription: (projectDescription: HomeTypes.ProjectDescription) =>
    (dispatch: Dispatch<SetHomeProjectDescription>) => {
    dispatch({
      type: ActionTypes.HOME_PROJECT_DESCRIPTION,
      projectDescription
    });
  },

  setLoading: (loading: boolean) =>
    (dispatch: Dispatch<SetHomeLoading>) => {
    dispatch({
      type: ActionTypes.HOME_LOADING,
      loading
    });
  },

  setError: (error: HomeTypes.ErrorType) =>
    (dispatch: Dispatch<SetHomeError>) => {
    dispatch({
      type: ActionTypes.HOME_ERROR,
      error
    });
  },

  setProjectId: (projectId: string) =>
    (dispatch: Dispatch<SetHomeProjectId>) => {
    dispatch({
      type: ActionTypes.HOME_PROJECT_ID,
      projectId
    });
  },

};

export default HomeActions;
