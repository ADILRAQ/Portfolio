import * as React from "react";
import './WorkShow.css';
import Item from "../components/Item/item";

const WorkShow = (prop: {header: string}) => {

    return (
        <div className="container">
            <div className="header dosis-bold">{ prop.header }</div>
            <div className="items--holder">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default WorkShow;