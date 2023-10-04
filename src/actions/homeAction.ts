import { Dispatch } from "redux";
import { ActionTypes } from '../actionTypes/index';
import { HomeTypes } from "../types/home";

export interface AddHomeProjectDescription {
  type: ActionTypes.HOME_PROJECT_DESCRIPTION;
  projectDescription: HomeTypes.ProjectDescription;
}

export interface SetHomeLoading {
  type: ActionTypes.HOME_LOADING;
  loading: boolean;
}

export interface SetHomeError {
  type: ActionTypes.HOME_ERROR;
  error: boolean;
}

const HomeActions = {

  addProjectDescription: (projectDescription: HomeTypes.ProjectDescription) =>
    (dispatch: Dispatch<AddHomeProjectDescription>) => {
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

  setError: (error: boolean) =>
    (dispatch: Dispatch<SetHomeError>) => {
    dispatch({
      type: ActionTypes.HOME_ERROR,
      error
    });
  },

};

export default HomeActions;
