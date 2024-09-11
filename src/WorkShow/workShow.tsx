import * as React from "react";
import './WorkShow.css';
import Item from "../components/Item/item";
import { Itemdata } from "../data";

// DRY Pattern
const WorkShow = (prop: {header: string, data: Itemdata[]}) => {

    return (
        <div className="container">
            <div className="header dosis-bold">{ prop.header }</div>
            <div className="items--holder">
            {
                prop.data.map((data, id) => <Item key={id} name={data.name} link={data.link} description={data.description} />)
            }
            </div>
        </div>
    );
}

export default WorkShow;