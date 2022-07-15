import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


export type PostType = {
    id: string
    message: string
    likeCounter: number
}
export type PropsType = {
    postData: Array<PostType>
}

const MyPosts = (props: PropsType) => {
    let {postData} = props

    let postElement = postData.map(el =>
        <Post
            message={el.message}
            likeCounter={el.likeCounter}
        />)
    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea/>
                <br/>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>

    )
}
export default MyPosts;