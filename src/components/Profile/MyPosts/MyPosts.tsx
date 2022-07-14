import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <br/>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi how are you ?' likeCounter={3}/>
                <Post message='It"s my second post' likeCounter={5}/>
            </div>
        </div>

    )
}
export default MyPosts;