import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostTypes} from "../../../Redux/store";

type MyPostsPropsType = {
    postData: Array<PostTypes>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.postData.map((props, index) => {
        return <Post key={index}
                     id={props.id}
                     message={props.message}
                     likesCount={props.likesCount}/>
    });

    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        props.updateNewPostText(newText)
    }

    let onAddPost = () => {
        props.addPost()
    }

    let newPostText = props.newPostText

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChangeHandler}
                          value={newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    </div>
}
