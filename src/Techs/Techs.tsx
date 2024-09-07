import React, { useState } from "react";
import './Techs.css';
import { TechsNames } from '../data';

const Techs = () => {

    const [anim, setAnim] = useState<boolean>(false);

    const handleClick = () => {
        setAnim(value => !value);
    };

    return (
        <div className={!anim ? 'tech__container component less' : 'tech__container component more'} >
            <h1 className="header dosis-bold">Techs</h1>
            <div className="tech--wrapper" style={!anim ? {display: 'none'} : {}}>
            {
                TechsNames.map((data :[string, string]) => <img key={data[0]} src={`Tech/${data[0]}`} alt={`${data[1]} logo`} className="tech--logo" title={data[1]} />)
            }
            </div>
            <div className={!anim ? 'showmore rotateBack' : 'showmore rotate'} onClick={handleClick} ></div>
        </div>
    );
};

export default Techs;