import React from "react";
import style from'./Profile.module.css'

 const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://gidfon.com/prev/8919.jpg' alt=''/>
            </div>
            <div>Ava + description</div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>Post1</div>
                    <div className={style.item}>Post1</div>
                    <div className={style.item}>Post1</div>
                </div>

            </div>
        </div>
    )
}
export default Profile;