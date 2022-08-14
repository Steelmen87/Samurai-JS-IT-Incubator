import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


export type PostType = {
    id: string
    message: string
    likeCounter: number
}
export type PropsType = {}

const MyPostsContainer = (props: PropsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState()
                    let ButtonAddPost = () => {
                        if (state.profilePage.newPostText.trim() === '') return
                        store.dispatch(AddPostAC(state.profilePage.newPostText))
                    }
                    let onPostChange = (text: string) => {
                        text && store.dispatch(UpdateNewPostTextAC(text))
                    }
                    return <MyPosts
                        postData={state.profilePage.postData}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={ButtonAddPost}/>
                }
            }
        </StoreContext.Consumer>


    )
}
export default MyPostsContainer;