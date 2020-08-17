import {ActionsTypes, PostTypes} from './store';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

type InitialStateType = {
    postData: Array<PostTypes>
    newPostText: string
}

let initialState: InitialStateType = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 1, message: 'By', likesCount: 120}
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD_POST": {
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)

export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)