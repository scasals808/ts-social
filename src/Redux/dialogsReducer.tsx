import {ActionsTypes, DialogItemTypes, MessageTypes} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

type InitialStateType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
    newMessageText: string
}

let initialState: InitialStateType = {
    dialogsData: [
        {id: 1, name: 'Dima',},
        {id: 2, name: 'Vova',},
        {id: 3, name: 'Tima',},
        {id: 4, name: 'Katya',},
        {id: 5, name: 'Misha',}
    ],
    messagesData: [
        {id: 1, message: 'yo'},
        {id: 1, message: 'ho'},
        {id: 1, message: 'hey'},
        {id: 1, message: 'go'},
        {id: 1, message: 'high'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
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
