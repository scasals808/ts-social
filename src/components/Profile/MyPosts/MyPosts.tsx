import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostTypes, ProfilePageType} from "../../../Redux/state";


const MyPosts = (props: ProfilePageType) => {

    let postElement = props.postData.map( (props) => {
        return <Post id={props.id} message={props.message} likesCount={props.likesCount}/>
    })

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    </div>
}


export default MyPosts;