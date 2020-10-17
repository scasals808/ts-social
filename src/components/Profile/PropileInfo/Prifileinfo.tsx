import React from "react";
import s from './Profileinfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../Redux/store";


type ProfileInfoPropsType = {
    profile:  ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader />
    }

    return <div>
        <div className={s.description_block}>
            <img src={props.profile.photos.large !== null ? props.profile.photos.large : 'https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>'Looking for a job'{props.profile.lookingForAJob === true ? '+' : '-'}</div>
        </div>
    </div>
}