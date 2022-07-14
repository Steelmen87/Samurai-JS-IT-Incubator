import style from "./Post.module.css";
import React from "react";

interface PropsType {
    message: string
    likeCounter: number
}

const Post = (props: PropsType) => {
    const {message, likeCounter} = props;
    return (
        <div className={style.item}>
            <img
                src='https://e7.pngegg.com/pngimages/581/573/png-clipart-ninja-holding-red-ninja-laptop-illustration-ninja-computer-programming-learning-study-skills-avatar-heroes-cartoon.png'
                alt=''
            />
            <br/>
            {message}
            <div>
                <span>
                    Likes Count: <strong>{likeCounter}</strong>
                </span>
            </div>
        </div>
    )
}
export default Post;