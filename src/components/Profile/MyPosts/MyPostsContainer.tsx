import React from "react";
import {ActionsTypes, RootStateType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../Redux/profileReducer";
import {RootStateReduxType} from "../../../Redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        profilePage: state.profilePage
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        changeNewPostText: (newText: string) => {
            let action = updateNewPostText(newText)
            dispatch(action)
        },
        addPost: () =>{
            dispatch(addPost())
        }
    }
}*/
export const MyPostsContainer = connect(mapStateToProps,{
    updateNewPostText,
    addPost
})(MyPosts)