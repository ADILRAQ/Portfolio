import React from "react";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import image from './Assets/Image.svg';
import cloud from './Assets/cloud.svg';

const Layout = () => {

  return (
    <>
      <img src={image} alt='' className='h-[100%] left-0 max-sm:hidden'></img>
      <div className='flex-1 flex flex-col h-[100%] w-full'>
        <div className="self-end mr-6 mt-4 max-sm:mr-3">
          <Navbar />
        </div>

        <div className='flex-1 h-[100%] pt-24 pl-10 max-sm:pt-7 max-sm:pl-0'>
          <Outlet />
        </div>
        </div>
      <img src={cloud} alt='' className='absolute bottom-0 right-0 max-sm:w-[35%]'/>
    </>
  );
}

export default Layout;