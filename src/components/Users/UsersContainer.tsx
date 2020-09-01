import React from "react";
import {connect} from "react-redux";
import {ActionsTypes, UsersTypes} from "../../Redux/store";
import {FollowAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import Users from "./Users";
import {RootStateReduxType} from "../../Redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (items: Array<UsersTypes>) => {
            dispatch(setUsersAC(items))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)