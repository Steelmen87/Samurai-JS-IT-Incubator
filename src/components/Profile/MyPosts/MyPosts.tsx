import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/Profile-Reducer";


export type PropsType = {
    profilePage:profilePageType
    updateNewPostText: (newText: string) => void
    addPost(postMessage: string): void
}

const MyPosts = (props: PropsType) => {
    let {profilePage, addPost, updateNewPostText} = props

    let postElement = profilePage.postData.map(el =>
        <Post key={el.id + el.message}
              message={el.message}
              likeCounter={el.likeCounter}
        />)

    let ButtonAddPost = () => {
        if (profilePage.newPostText.trim() === '') return
        addPost(profilePage.newPostText)

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        text && updateNewPostText(text)

    }
    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea value={profilePage.newPostText} onChange={onPostChange}/>
                <br/>
                <button onClick={ButtonAddPost}>Add post</button>
            </div>
            <div className={style.posts}>{postElement}</div>
        </div>

    )
}
export default MyPosts;