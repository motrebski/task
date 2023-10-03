import { Dispatch } from "redux";
import { ActionTypes } from '../actionTypes/index';
import { Home } from "../types/home";

export interface AddHomeProjectDescription {
  type: ActionTypes.HOME_PROJECT_DESCRIPTION;
  projectDescription: Home.ProjectDescription;
}

const HomeActions = {

  addProjectDescription: (projectDescription: Home.ProjectDescription) =>
    (dispatch: Dispatch<AddHomeProjectDescription>) => {
    dispatch({
      type: ActionTypes.HOME_PROJECT_DESCRIPTION,
      projectDescription
    });
  },

};

export default HomeActions;
