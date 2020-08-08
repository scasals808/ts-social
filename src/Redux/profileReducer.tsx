import {ActionsTypes, PostTypes} from "./store";

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
    if (action.type === ADD_POST) {
        let newPost: PostTypes = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        }
        state.postData.push(newPost);
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}
