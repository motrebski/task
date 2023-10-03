import { Dispatch } from "redux";
import { ActionTypes } from '../actionTypes/index';
import { HomeTypes } from "../types/home";

export interface AddHomeProjectDescription {
  type: ActionTypes.HOME_PROJECT_DESCRIPTION;
  projectDescription: HomeTypes.ProjectDescription;
}

const HomeActions = {

  addProjectDescription: (projectDescription: HomeTypes.ProjectDescription) =>
    (dispatch: Dispatch<AddHomeProjectDescription>) => {
    dispatch({
      type: ActionTypes.HOME_PROJECT_DESCRIPTION,
      projectDescription
    });
  },

};

export default HomeActions;
