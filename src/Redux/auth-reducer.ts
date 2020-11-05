import {ActionsTypes} from "./store";
import {authApi, profileApi, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

type InitialStateType = {
    id: any
    login: string | null
    email: string | null
    isAuth: boolean
    photo: string | null
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    photo: null
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        login,
        email,
        isAuth
    }
} as const)
export const setUserPhoto = (photo: string) => ({
    type: SET_USER_PHOTO,
    photo
} as const)

export const getAuth = () => {
    return (dispatch: any) => {
        authApi.getAuthProfile()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                    profileApi.getUserProfile(id)
                        .then(data => {
                            dispatch(setUserPhoto(data.photos.small))
                        })
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authApi.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message})) //redux-form action
            }
        })
}

export const logout = () => (dispatch: any) => {
    authApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, true))
            }
        })
}



