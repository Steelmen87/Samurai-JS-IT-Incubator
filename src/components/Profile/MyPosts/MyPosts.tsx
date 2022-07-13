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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>

    )
}
export default MyPosts;