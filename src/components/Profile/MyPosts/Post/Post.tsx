import style from "./Post.module.css";
import React from "react";

const Post = () => {
    return (
        <div className={style.item}>
            <img
                src='https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
                alt=''
            />
            Post1
            <div>
                <span>
                    Like
                </span>
            </div>
        </div>
    )
}
export default Post;