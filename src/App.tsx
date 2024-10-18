import React from 'react';
import image from './Assets/Image.svg';
import cloud from './Assets/cloud.svg';
import Navbar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className='h-screen w-full min-h-[820px] bg-background flex gap-9 font-poppins text-dark relative'>
      <img src={image} alt='' className='h-[100%] left-0'></img>
      <div className='flex-1 flex flex-col'>
          <div className="self-end mr-6 mt-4">
              <Navbar />
          </div>

          <div className='flex-1 pt-24 pl-10'>
            <About />
          </div>
        </div>
        <img src={cloud} alt='' className='absolute bottom-0 right-0'/>
    </div>
  );
}

export default App;
