import {ActionsTypes, UsersTypes} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'

type InitialStateType = {
    usersData: UsersTypes[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    usersData: [],
    pageSize: 80,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, usersData: action.items}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
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

export const setCurrentPageAC = (page: number) => ({
    type: SET_CURRENT_PAGE,
    page
} as const)

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)