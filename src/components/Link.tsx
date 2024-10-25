import React from "react";
import Visit from '../Assets/Visit.svg';

const Link :React.FC<{link: string}> = ({ link }) => {

  return(
    <a href={link} target='_blank' rel="noreferrer" className='w-[20px] h-[20px] rounded-full'>
      <img src={Visit} alt="" className='w-[100%] h-[100%] cursor-pointer hover:rotate-45 transition-transform duration-150 ease-in'/>
    </a>
  );
}

export default Link;