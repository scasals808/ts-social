import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/store";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePagePropsType = {

}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;