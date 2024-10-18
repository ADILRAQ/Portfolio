import React from 'react';
import Navbar from './components/NavBar';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <div className='h-screen w-full min-h-[820px] bg-background flex gap-9 font-poppins text-dark relative'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<About />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
