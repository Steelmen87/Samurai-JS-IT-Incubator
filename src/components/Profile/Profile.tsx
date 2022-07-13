import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

 const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://gidfon.com/prev/8919.jpg' alt=''/>
            </div>
            <div>Ava + description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile;