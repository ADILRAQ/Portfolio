import * as React from "react";
import './connect.css';

const Connect = () => {

    return (
        <div className="connect--holder">
            <a className="btn link dosis-light" href="https://www.linkedin.com/in/adil-raqioui" target="to_blank">
                LINKEDIN
            </a>
            <a className="btn resume dosis-light" href="resume.pdf" target="to_blank">
                RESUME
            </a>
            <a className="btn git dosis-light" href="https://github.com/ADILRAQ" target="to_blank">
                GITHUB
            </a>
        </div>
    );
}

export default Connect;