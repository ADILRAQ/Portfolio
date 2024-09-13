import React from 'react';
import './Message.css';
import { MessageProps } from '../../shapes/MessageProps';

export default function Message(prop :MessageProps) {
    console.log(prop.send);
    return (
        <div className={`msj ${'send'}send dosis-regular--chat`}>
            Wahaatasdasdasd sadasdasdasdeqwe qweqweqweqwe sfdsqw ewrewr
        </div>
    )
}
