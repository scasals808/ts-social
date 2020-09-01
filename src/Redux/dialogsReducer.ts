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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: new Date().getTime(), message: newMessage}]
            }
        default:
            return state
    }
}

export const sendMessage = () => ({
    type: SEND_MESSAGE,
} as const)

export const updateNewMessageText = (newMessage: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage
} as const)
