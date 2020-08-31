import React from "react";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType, UsersTypes} from "../../Redux/store";
import {FollowAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import Users from "./Users";
import {RootStateReduxType} from "../../Redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
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
        setUsers: (items: Array<UsersTypes>) => {
            debugger
            dispatch(setUsersAC(items))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)