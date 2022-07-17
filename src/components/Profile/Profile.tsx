import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type Post = {
    id: string
    message: string
    likeCounter: number
}
type ProfileType = {
    postData: Array<Post>
    newPostText: string
    updateNewPostText:(newText: string) => void
    addPost(postMessage: string): void
}

const Profile = (props: ProfileType) => {
    let {postData, addPost, newPostText,updateNewPostText} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={updateNewPostText}
                newPostText={newPostText}
                addPost={addPost}
                postData={postData}/>
        </div>
    )
}
export default Profile;
