import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";

type ProfilePagePropsType = {
    profile: any
}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;