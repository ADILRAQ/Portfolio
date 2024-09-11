import React from "react";
import './item.css';
import { Itemdata } from "../../data";
import { HtmlTooltip } from "../../shapes/HtmlToolTip";
import titleFormat from "../../utils/titleFomat";

// DRY Pattern
const Item = ({name, link, description}: Itemdata) => {

    const handleClick = () => {
        window.open(link, '_blank');
    }

    return (
        <HtmlTooltip title={titleFormat(name, description)} placement="right-start" followCursor>
            <div className="item">
                <div className="title dosis-regular">{ name }</div>
                <div className="redirect" onClick={handleClick}></div>
                <div className="select"></div>
            </div>
        </HtmlTooltip>
    );
}

export default Item;