import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
        />

    </div>
}

export default Profile;