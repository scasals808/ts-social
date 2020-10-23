import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogsData: DialogPageType
    sendMessage: (newMessageBody: string) => void
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

    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)