import {ActionsTypes, UsersTypes} from "./store";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


type InitialStateType = {
    usersData: UsersTypes[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    usersData: [],
    pageSize: 80,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({
    type: FOLLOW,
    userId: userId
} as const)
export const unfollowSuccess = (userId: number) => ({
    type: UNFOLLOW,
    userId: userId
} as const)
export const setUsers = (items: Array<UsersTypes>) => ({
    type: SET_USERS,
    items: items
} as const)
export const setCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    page
} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

//thunk
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}