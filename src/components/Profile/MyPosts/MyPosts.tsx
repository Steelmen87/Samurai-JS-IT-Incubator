import React, {RefObject} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


export type PostType = {
    id: string
    message: string
    likeCounter: number
}
export type PropsType = {
    postData: Array<PostType>
    addPost(postMessage: string): void
}

const MyPosts = (props: PropsType) => {
    let {postData, addPost} = props

    let postElement = postData.map(el =>
        <Post
            message={el.message}
            likeCounter={el.likeCounter}
        />)
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let ButtonAddPost = () => {
        let text = newPostElement.current?.value
        text && addPost(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
                <br/>
                <button onClick={ButtonAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>

    )
}
export default MyPosts;