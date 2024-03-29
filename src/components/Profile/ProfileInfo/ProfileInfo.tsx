import style from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import React from "react";
import {profileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: profileType
    status:string
    updateStatus:Function
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                <br/>
                <ProfileStatus
                    updateStatus={props.updateStatus}
                    status={props.status}/>
                About me : {props.profile.aboutMe}
            </div>
        </div>
    )
}