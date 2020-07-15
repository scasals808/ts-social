import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/state";

export const Dialogs = (props: DialogPageType) => {

    let dialogsElements = props.dialogsData.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>
    })

    let messageElements = props.messagesData.map((message) => {
        return <Message id={message.id} message={message.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}