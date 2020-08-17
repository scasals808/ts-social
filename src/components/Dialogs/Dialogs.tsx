import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/store";

type DialogsPropsType = {
    dialogsData: DialogPageType
    updateNewMessageBody: (newMessageText: string) => void
    onSendMessageClick: () => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.dialogsData.map((dialog, index) => {
        return <DialogItem
            key={index}
            id={dialog.id}
            name={dialog.name}/>
    });

    let messageElements = props.dialogsData.messagesData.map((message, index) => {
        return <Message key={index} id={message.id} message={message.message}/>
    })

    let newMessageText = props.dialogsData.newMessageText

    let onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = event.currentTarget.value
        props.updateNewMessageBody(newMessage)
    }

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea placeholder='Enter your message'
                              onChange={onMessageChangeHandler}
                              value={newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}