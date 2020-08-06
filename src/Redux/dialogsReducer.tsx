import {ActionsTypes, DialogPageType} from "./state";

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage
    } else if (action.type === SEND_MESSAGE) {
        let message = state.newMessageText
        state.newMessageText = ''
        state.messagesData.push({
            id: new Date().getTime(),
            message: message
        })
    }
    return state
}
