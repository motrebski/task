import { ActionTypes } from '../actionTypes/index';
import {
  AddHomeProjectDescription,
} from "../actions/homeAction";

type Action =
  | AddHomeProjectDescription;

const initialState = {
  projectDescription: {}
};

export const homeReducer = (state: Record<string, any> = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.HOME_PROJECT_DESCRIPTION:
      return {
        ...state,
        projectDescription: state.projectDescription
      };

    default:
      return state;
  }
};
