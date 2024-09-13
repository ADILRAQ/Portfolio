import React, { CSSProperties } from "react";
import './Inform.css';

type ColorType = 'logo' | 'orange';

const Inform = ({color}: {color :ColorType}) => {

    const ColorData :Record<ColorType, CSSProperties> = {
        'logo': {
            color: 'var(--logo)',
            margin: '20px'
        },
        'orange': {
            color: 'var(--orange)',
            margin: '20px'
        }
    }
    return <div className="dosis-regular" style={{...ColorData[color]}}>Not Done yet !</div>
}

export default Inform;