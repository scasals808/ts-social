import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";
import {ProfilePageType} from "../../Redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />

    </div>
}

export default Profile;