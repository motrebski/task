import React from 'react';
import { Link } from "react-router-dom";

export const NotFound = () => {

  return(
    <div className='flex items-center justify-center h-screen gap-2.5'>
      <span className='text-3xl'>404</span>
      <span>Page not found!</span>
      <Link to='/'><button className='bg-teal-500 rounded-md px-5 hover:bg-teal-600'>Home Page</button></Link>
    </div>
  );
}
