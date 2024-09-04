import React, { useState } from "react";
import './Techs.css';

const Techs = () => {

    const [anim, setAnim] = useState<boolean>(true);
    // const [anim, setAnim] = useState<boolean>(false);

    const handleClick = () => {
        setAnim(value => !value);
    };

    return (
        <div className={!anim ? 'tech__container component less' : 'tech__container component more'} >
            <h1 className="header dosis-bold">Techs</h1>
            <div className="tech--wrapper">
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
                <img src="Tech/typescript.svg" alt="" className="tech--logo" />
            </div>
            <div className={!anim ? 'showmore rotateBack' : 'showmore rotate'} onClick={handleClick} ></div>
        </div>
    );
};

export default Techs;