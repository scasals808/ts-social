import React, {ChangeEvent} from "react";
import {sendMessageActionCreator, StoreType, updateNewMessageTextActionCreator} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {

}

export const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState()

            let onNewMessageChange = (newMessageText: string) => {
                let action = updateNewMessageTextActionCreator(newMessageText)
                store.dispatch(action)
            }

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator(state.profilePage.newPostText))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            onSendMessageClick={onSendMessageClick}
                            dialogsData={state.dialogsPage}
            />
        }
    }
    </StoreContext.Consumer>

}