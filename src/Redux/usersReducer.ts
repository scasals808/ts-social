import {ActionsTypes, UsersTypes} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type InitialStateType = {
    usersData: UsersTypes[]
}

let initialState: InitialStateType = {
    usersData: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            debugger
            return {...state, usersData: [...state.usersData, ...action.items]}
        default:
            return state
    }
}

export const FollowAC = (userId: number) => ({
    type: FOLLOW,
    userId: userId
} as const)

export const unFollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId: userId
} as const)

export const setUsersAC = (items: Array<UsersTypes>) => ({
    type: SET_USERS,
    items: items
} as const)