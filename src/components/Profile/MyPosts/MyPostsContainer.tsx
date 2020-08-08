import React from "react";
import {addPostActionCreator, StoreType, updateNewPostTextActionCreator} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {

}

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                let changeNewPostText = (newPostText: string) => {
                    let action = updateNewPostTextActionCreator(newPostText)
                    store.dispatch(action)
                }

                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                }
                return <MyPosts changeNewPostText={changeNewPostText}
                                addPost={addPost}
                                profilePage={state.profilePage}/>
            }
        }
        </StoreContext.Consumer>
    )
}
