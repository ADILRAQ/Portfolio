import * as React from 'react';
import './App.css';
import Projects from './WorkShow/workShow';
import Connect from './Connect/connect';
import Contact from './Contact/contact';
import WorkShow from './WorkShow/workShow';

function App() {
  return (
    <div className='wrapper'>
      <img src='Logo.svg' alt="Logo" className='logo' />
      <div className='main'>
        <div className='side'>
          <WorkShow header='Projects' />
          <Connect />
        </div>
        <div className='center'></div>
        <div className='side'>
          <Contact />
          <WorkShow header='Articles' />
        </div>
      </div>
    </div>
  );
}

export default App;
