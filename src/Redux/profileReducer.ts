import {ActionsTypes, PostTypes} from './store';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type InitialStateType = {
    postData: Array<PostTypes>
    newPostText: string
    profile: any
}

let initialState: InitialStateType = {
    postData: [],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export const addPost = () => ({
    type: ADD_POST
} as const)

export const updateNewPostText = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    profile
} as const)


