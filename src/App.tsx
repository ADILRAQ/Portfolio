import * as React from 'react';
import './App.css';
import Projects from './Projects/project';
import Connect from './Connect/connect';
import Contact from './Contact/contact';

function App() {
  return (
    <>
      <img src='Logo.svg' alt="Logo" className='logo' />
      <div className='main'>
        <div className='side'>
          <Projects />
          <Connect />
        </div>
        <div className='center'></div>
        <div className='side'>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
