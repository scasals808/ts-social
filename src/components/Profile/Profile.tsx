import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./PropileInfo/Prifileinfo";
import {ProfileType} from "../../Redux/store";

type ProfilePagePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void

}
const Profile = (props: ProfilePagePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;