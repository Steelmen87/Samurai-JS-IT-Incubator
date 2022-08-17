import style from "./Profile.module.css";
import React from "react";

type ProfileInfoType = {}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div className={style.content}>
                <img src='http://zabavniks.com/wp-content/uploads/piratskiy_korabl_27_31152536.jpg' alt=''height={'auto'} width={'998px'}/>
            </div>
            <div className={style.descriptionBlock}>
                Ava + description</div>
        </div>
    )
}