import * as React from "react";
import './connect.css';

// FIXME make more good UI for those buttons

const Connect = () => {

    const handleClick = (id :number) => {
        // TODO: handle click logic
        console.log(id);
    }

    return (
        <div className="connect--holder">
            <div className="btn link dosis-light" onClick={() => handleClick(1)} >LINKEDIN</div>
            <div className="btn resume dosis-light" onClick={() => handleClick(2)} >RESUME</div>
            <div className="btn git dosis-light" onClick={() => handleClick(3)} >GITHUB</div>
        </div>
    );
}

export default Connect;