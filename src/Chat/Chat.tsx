import React from "react";
import './Chat.css';
import Message from "../components/Message/Message";

const Chat = () => {

    return (
        <div className="chat component">
            <div className="header dosis-bold"> About Me </div>
            <div className="dosis-light notice"> Winter is coming <span> 🚀 </span></div>
            {/* <div className="chat__wrapper" >
                <Message send={false} />
            </div> */}
            {/* <div className="chat__input" >
                <div className="chat__choice">
                    <div className="chat__choice--key up"></div>
                    <div className="chat__choice--key down"></div>
                </div>
                <div className="chat__choice--input dosis-light"><i>Ask me...</i></div>
                <div className="chat__choice--send"></div>
            </div> */}
        </div>
    );
}

export default Chat;