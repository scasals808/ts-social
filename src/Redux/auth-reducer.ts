import {ActionsTypes} from "./store";
import logo192 from '../assets/image/logo192.png'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

type InitialStateType = {
    id: number | null
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
    photo: logo192
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email
    }
} as const)

export const setUserPhoto = (photo: string) => ({
    type: SET_USER_PHOTO,
    photo
} as const)



