import React from 'react';
import { Dispatch } from "redux";
import { getProjectInitData, getProjectDescription } from "../../services/homeService";
import { useDispatch, useSelector } from 'react-redux';
import HomeActions from "../../actions/homeAction";
import { HomeTypes }  from "../../types/home";
import { calculateBoundingBox }  from "../../utils/BoundingBox";
import { Element }  from "../../components/Element";
import { RootState } from '../../store';

export const Home = () => {

  const dispatch = useDispatch<Dispatch<any>>();
  const projectDescription = useSelector<RootState, HomeTypes.ProjectDescription>((state) =>
    state.projectDescription
  );

  const fetchRandomData = async () => {

    try {
      const projectInitData = await getProjectInitData();
      const projectDescription = await getProjectDescription(projectInitData.id);
      projectDescription?.project?.items.map((item: HomeTypes.ElementProperty) => {
        const boundingBox = calculateBoundingBox(item.width, item.height, item.rotation * (Math.PI / 180));
        item.boundingBox = boundingBox;
        return item;
      });
      dispatch(HomeActions.addProjectDescription(projectDescription));
    } catch (error) {
    }

  }

  return(
    <div className='flex flex-col items-center h-screen'>
      <div className='bg-sky-50 w-full'>
        <div className='px-5 py-5'>
          <div className='flex gap-2.5 mb-2 max-md:flex-col'>
            <span>Fetch random data:</span>
            <button
              onClick={fetchRandomData}
              className='bg-teal-500 rounded-md px-5 w-20 hover:bg-teal-600'
            >
              Fetch
            </button>
          </div>
          <div className='flex gap-2.5 max-md:flex-col'>
            <span>Fetch data with id:</span>
            <input className='rounded-md border-solid border px-1 w-64 border-teal-600'></input>
            <button
              className='bg-teal-500 rounded-md px-5 w-20 hover:bg-teal-600'
            >
              Fetch
            </button>
          </div>
          {projectDescription?.project?.name && (
            <React.Fragment>
              <div className='flex gap-2.5 mt-2'><span>Name:</span>{projectDescription?.project?.name}</div>
              <div className='flex gap-2.5'><span>Id:</span>{projectDescription?.project?.id}</div>
            </React.Fragment>
          )}
        </div>
      </div>
      {projectDescription?.project && (
      <div className='h-full'>
        <svg viewBox={`0 0 ${projectDescription?.project?.width} ${projectDescription?.project?.height}`} width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">
          {projectDescription?.project?.items?.map((item: HomeTypes.ElementProperty, key: number) => (
            <Element key={key} item={item}></Element>
          ))}
        </svg>
      </div>
      )}
    </div>
  );
}
