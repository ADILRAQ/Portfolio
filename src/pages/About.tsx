import React from "react";
import Button from "../components/Button";
import LinkedIn from '../Assets/LinkedIn.svg';
import Github from '../Assets/Github.svg';
import Copy from '../Assets/Copy.svg';
import { Links } from "../data";
import toast, { Toaster } from "react-hot-toast";
import Techs from "../components/Techs";
import { Helmet } from 'react-helmet';

const About = () => {

  const myStack = ['ReactJS', 'NextJs', 'ExpressJs', 'NestJs'];

  const handleClick = (link :string)  => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('raqiouiadil@gmail.com')
    .finally(() => toast.success('Email Copied  ;)'));
  }

  return (
    <div className="max-sm:ml-2">
      <Helmet>
        <title>About | Adil Raqioui</title>
        <meta name="description" content="Learn more about me, my background, skills, and experience." />
      </Helmet>
      <h1 className="font-bold text-8xl text-orange max-sm:text-5xl">HEY</h1>
      <div className="font-regular text-4xl mt-6 max-sm:text-xl max-sm:mt-3">
        <p>This is <b>ADIL RAQIOUI</b></p>
        <p className="mt-3 max-sm:mt-1">FullStack JavaScript, Problems Solver</p>
        <p className="mt-3 max-sm:mt-1">alaways <i className="font-thin">"Keep it simple, stupid !"</i></p>
        {/* Technologies That I use */}
        <div className="mt-4">
          <Techs items={myStack} type={{variant: 'bordered', sz: 'sm'}}/>
        </div>
        {/* Links Buttons */}
        <div className="flex gap-7 mt-6 max-sm:gap-3">
          <Button variant="styled" sz="md" onClick={() => handleClick(Links['LinkedIn'])}>
            <div className="h-auto flex justify-center align-center gap-3">
              <img src={LinkedIn} alt="" />
              LinkedIn
            </div>
          </Button>

          <Button variant="styled" sz="md" onClick={() => handleClick(Links['Github'])}>
            <div className="h-auto flex justify-center align-center gap-3">
              <img src={Github} alt="" />
              GitHub
            </div>
          </Button>

          <Button variant="styled" sz="md" onClick={() => copyEmail()}>
            <div className="h-auto flex justify-center align-center gap-3">
              <img src={Copy} alt="" />
              Email
              {/* Notification that email copied */}
              <Toaster 
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#2D3134',
                    padding: '20px 40px',
                    color: '#FAF8ED',
                    boxShadow: '0px 12px 48px #C4BFAE'
                  }
                }}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;