import { ActionTypes } from '../actionTypes/index';
import {
  AddHomeProjectDescription,
  SetHomeLoading,
  SetHomeError
} from "../actions/homeAction";

type Action =
  | AddHomeProjectDescription
  | SetHomeLoading
  | SetHomeError;

const initialState = {
  loading: false,
  projectDescription: {},
  error: false
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

    default:
      return state;
  }
};
