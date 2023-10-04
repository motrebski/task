import React, { useState } from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from 'react-redux';
import HomeActions from "../../actions/homeAction";
import { HomeTypes }  from "../../types/home";
import { Element }  from "../../components/Element";
import { RootState } from '../../store';
import { useForm } from "react-hook-form";
import { ReactComponent as Loading } from "../../images/loading.svg";
import { ReactComponent as Error } from "../../images/error.svg";

export const Home = () => {

  const [disabledButtonToggle, setDisabledButtonToggle] = useState<boolean>(false); 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch<Dispatch<any>>();
  const projectDescription = useSelector<RootState, HomeTypes.ProjectDescription>((state) =>
    state.projectDescription
  );
  const loading: boolean = useSelector<RootState, boolean>((state) =>
    state.loading
  );
  const error: HomeTypes.ErrorType = useSelector<RootState, HomeTypes.ErrorType>((state) =>
    state.error
  );

  const fetchData = async (data: Record<string, any> = {}) => {
    let id: string = "";
    if (data?.id) {
      id = data.id;
      setDisabledButtonToggle(false);
    } else {
      setDisabledButtonToggle(true);
    }
    dispatch(HomeActions.setProjectId(data?.id));
  }

  return(
    <div className='flex flex-col items-center h-screen'>
      <div className='bg-sky-50 w-full'>
        <div className='px-5 py-5'>
          <div className='flex gap-2.5 mb-2 max-md:flex-col'>
            <span>Fetch random project:</span>
            <button
              disabled={(loading && disabledButtonToggle)}
              onClick={fetchData}
              className={`bg-teal-500 rounded-md px-5 w-20 hover:bg-teal-600 ${(loading && disabledButtonToggle)? 'bg-teal-600': ''}`}
            >
              Fetch
            </button>
          </div>
          
          <form onSubmit={handleSubmit(fetchData)}>
            <div className='flex gap-2.5 max-md:flex-col'>
              <span>Fetch project with id:</span>
              <input 
                {...register("id", { required: true })} 
                className='rounded-md border-solid border px-1 w-64 border-teal-600'></input>
              <div className='flex gap-2.5'>
                <button
                  disabled={(loading && !disabledButtonToggle)}
                  type='submit'
                  className={`bg-teal-500 rounded-md px-5 w-20 hover:bg-teal-600 ${(loading && !disabledButtonToggle)? 'bg-teal-600': ''}`}
                >
                  Fetch
                </button>
                {errors.id && <span className='text-rose-500'>Id is required!</span>}
              </div>
              </div>
          </form>
          
          {projectDescription?.project?.name && (
            <React.Fragment>
              <div className='flex gap-2.5 mt-3'><span>Name:</span>{projectDescription?.project?.name}</div>
              <div className='flex gap-2.5'><span>Id:</span>{projectDescription?.project?.id}</div>
            </React.Fragment>
          )}
        </div>
      </div>
      {loading && (
        <div className='flex items-center justify-center h-full'>
          <Loading/>
        </div>
      )}
      {(!loading && !error && projectDescription?.project) && (
      <div className='h-full'>
        <svg viewBox={`0 0 ${projectDescription?.project?.width} ${projectDescription?.project?.height}`} width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">
        <rect width='100%' height='100%' fill='#efefef' />
          {projectDescription?.project?.items?.map((item: HomeTypes.ElementProperty, key: number) => (
            <Element key={key} item={item}></Element>
          ))}
        </svg>
      </div>
      )}
      {(!loading && !error && !projectDescription?.project) && (
        <div className='flex items-center justify-center h-full'>
          <span>There is no data!</span>
        </div>
      )}
      {(!loading && error) && (
        <div className='flex items-center justify-center h-full gap-2.5'>
          <Error/><span>{error}</span>
        </div>
      )}
    </div>
  );
}
