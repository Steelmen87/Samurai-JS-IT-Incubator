import style from "./Profile.module.css";
import React from "react";

type ProfileInfoType = {}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div className={style.content}>
                <img src='https://gidfon.com/prev/8919.jpg' alt=''/>
            </div>
            <div className={style.descriptionBlock}>
                Ava + description</div>
        </div>
    )
}