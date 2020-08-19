import React from "react";
import {ActionsTypes, RootStateType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        changeNewPostText: (newText: string) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)