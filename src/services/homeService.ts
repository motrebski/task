import { HomeTypes } from "../types/home";

export const URL_NAME = "http://recruitment01.vercel.app/api";

export const getProjectInitData = async (): Promise<HomeTypes.ProjectInitData> => {
  const response = await fetch(`${URL_NAME}/init`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Project init data error");
  }
};

export const getProjectDescription = async (id: string): Promise<HomeTypes.ProjectDescription> => {

  const response = await fetch(`${`${URL_NAME}/project`}/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Project description error");
  }
};
