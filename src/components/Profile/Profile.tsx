import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";
import {ProfilePageType} from "../../Redux/state";


const Profile = (props: ProfilePageType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
    </div>
}

export default Profile;