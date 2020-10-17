import {ActionsTypes, PostTypes, ProfileType} from './store';
import {profileApi, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type InitialStateType = {
    postData: Array<PostTypes>
    newPostText: string
    profile: ProfileType
    status: string
}

let initialState: InitialStateType = {
    postData: [],
    newPostText: '',
    profile: {
        userId: 0,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName:  '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        },
        aboutMe: ''
    },
    status: ''
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
        case SET_STATUS:
            return {...state, status: action.status}
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
export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)
export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)

export const getProfile = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileApi.updateStatus(status)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

