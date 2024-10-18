import React from "react";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import image from './Assets/Image.svg';
import cloud from './Assets/cloud.svg';

const Layout = () => {

  return (
    <>
      <img src={image} alt='' className='h-[100%] left-0'></img>
      <div className='flex-1 flex flex-col'>
        <div className="self-end mr-6 mt-4">
          <Navbar />
        </div>

        <div className='flex-1 pt-24 pl-10'>
          <Outlet />
        </div>
        </div>
      <img src={cloud} alt='' className='absolute bottom-0 right-0'/>
    </>
  );
}

export default Layout;