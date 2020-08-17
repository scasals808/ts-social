import React, {ChangeEvent, Dispatch} from "react";
import {ActionsTypes, RootStateType} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsData: state.dialogsPage
    }
}
//функция для данных
let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        updateNewMessageBody: (newMessage: string) => {
            let action = updateNewMessageTextActionCreator(newMessage)
            dispatch(action)
        },
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
//функция для коллбэков
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);