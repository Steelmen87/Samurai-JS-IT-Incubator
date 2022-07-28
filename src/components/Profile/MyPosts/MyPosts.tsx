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
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost(postMessage: string): void
}

const MyPosts = (props: PropsType) => {
    let {postData, addPost, newPostText, updateNewPostText} = props

    let postElement = postData.map(el =>
        <Post
            message={el.message}
            likeCounter={el.likeCounter}
        />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let ButtonAddPost = () => {
        addPost(newPostText)
    }
    let onPostChange = () => {

        let text = newPostElement.current?.value
        text && updateNewPostText(text)
    }
    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea
                    value={newPostText}
                    onChange={onPostChange}
                    ref={newPostElement}
                />
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