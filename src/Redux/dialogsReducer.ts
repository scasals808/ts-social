import {ActionsTypes, DialogItemTypes, MessageTypes} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE'

type InitialStateType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
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
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: new Date().getTime(), message: newMessage}]
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string) => ({
    type: SEND_MESSAGE, newMessageBody
} as const)

