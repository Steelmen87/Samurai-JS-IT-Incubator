import style from "./Profile.module.css";
import React from "react";
import {profileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: profileType
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.content}>
                <img src='http://zabavniks.com/wp-content/uploads/piratskiy_korabl_27_31152536.jpg'
                     alt=''
                     height={'auto'}
                     width={'998px'}/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                <br/>
                {props.profile.aboutMe}
            </div>
        </div>
    )
}