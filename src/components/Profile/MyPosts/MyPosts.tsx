import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

type PropsType = {}

const MyPosts = (props: PropsType) => {
    let postData = [
        {id: '1', message: 'Hi how are you ?', likeCounter: 4},
        {id: '2', message: 'It"s my second post', likeCounter: 0},
    ]

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <br/>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postData.map(el =>
                    <Post
                        message={el.message}
                        likeCounter={el.likeCounter}
                    />)}
            </div>
        </div>

    )
}
export default MyPosts;