import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PostsPropsType) => {

    let postElement = props.profilePage.postData.map((props) => {
        return <Post key={props.id}
                     id={props.id}
                     message={props.message}
                     likesCount={props.likesCount}/>

    });

    let addPost = () => {
            props.addPost(props.newPostText)
    }

    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(event.currentTarget.value)
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
