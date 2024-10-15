import React from 'react';
import image from './Image.svg';
import Infos from './components/Infos';

function App() {
  return (
    <div className='h-screen w-full bg-background flex gap-9 font-poppins'>
      <img src={image} alt='' className='h-[100%] left-0'></img>
      <div className='flex-1 h-screen w-full'>
        <Infos />
      </div>
    </div>
  );
}

export default App;
