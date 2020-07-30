import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../Redux/state";

type PostsPropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: PostsPropsType) => {

    let postElement = props.profilePage.postData.map((props, index) => {
        return <Post key={index}
                     id={props.id}
                     message={props.message}
                     likesCount={props.likesCount}/>

    });

    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChangeHandler}
                          value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    </div>
}
