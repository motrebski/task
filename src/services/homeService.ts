export const URL_NAME = "http://recruitment01.vercel.app/api";

export const getProjectInitData = async (): Promise<any> => {
  const response = await fetch(`${URL_NAME}/init`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Project init data error");
  }
};

export const getProjectDescription = async (id: string): Promise<any> => {
  const response = await fetch(`${`${URL_NAME}/project`}/cklzjw3mn0001cq9k3mvy3fvf-7941218198815691`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Project description error");
  }
};