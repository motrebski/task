import { ActionTypes } from '../actionTypes/index';
import {
  SetHomeProjectDescription,
  SetHomeLoading,
  SetHomeError,
  SetHomeProjectId
} from "../actions/homeAction";

type Action =
  | SetHomeProjectDescription
  | SetHomeLoading
  | SetHomeError
  | SetHomeProjectId;

const initialState = {
  loading: false,
  projectDescription: {},
  error: null,
  projectId: ''
};

export const homeReducer = (state: Record<string, any> = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.HOME_PROJECT_DESCRIPTION:
      return {
        ...state,
        projectDescription: action.projectDescription
      };

    case ActionTypes.HOME_LOADING:
      return {
        ...state,
        loading: action.loading
      };

    case ActionTypes.HOME_ERROR:
      return {
        ...state,
        error: action.error
      };

    case ActionTypes.HOME_PROJECT_ID:
      return {
        ...state,
        projectId: action.projectId
      };

    default:
      return state;
  }
};
