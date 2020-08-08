import React from "react";
import s from "./../Dialogs.module.css"
import {MessageTypes} from "../../../Redux/store";




function Message(props:MessageTypes) {
    return <div className={s.message}>{props.message}</div>
}

export default Message;
