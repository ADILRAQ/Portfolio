import React from 'react';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Projects from './pages/Projects';
import Articles from './pages/Articles';

function App() {
  return (
    <div className='h-screen w-full min-h-[820px] bg-background flex gap-9 font-poppins text-dark relative'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<About />} ></Route>
          <Route path='/projects' element={<Projects />} ></Route>
          <Route path='/articles' element={<Articles />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
