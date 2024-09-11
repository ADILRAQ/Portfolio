import * as React from 'react';
import './App.css';
import Connect from './Connect/connect';
import Contact from './Contact/contact';
import WorkShow from './WorkShow/workShow';
import Techs from './Techs/Techs';
import Chat from './Chat/Chat';
import { ArticlesData, Projectsdata } from './data';

function App() {
  return (
    <div className='wrapper'>
      <img src='logo.svg' alt="Logo" className='logo' />
      <div className='main'>
        <div className='side'>
          <WorkShow header='Projects' data={Projectsdata}/>
          <Connect />
        </div>
        <div className='center'>
          <Techs />
          <Chat />
        </div>
        <div className='side'>
          <Contact />
          <WorkShow header='Articles' data={ArticlesData} />
        </div>
      </div>
    </div>
  );
}

export default App;
