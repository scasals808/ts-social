import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsTypes, RootStateType, UsersTypes} from "../../Redux/store";
import {FollowAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        usersData: state.usersPage.usersData
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
        setUsers: (users: Array<UsersTypes>) => {
            debugger
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)