import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";

type ProfilePagePropsType = {

}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;