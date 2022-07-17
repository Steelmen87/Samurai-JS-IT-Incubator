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
    addPost(postMessage:string):void
}

const Profile = (props: ProfileType) => {
    let {postData,addPost} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                addPost={addPost}
                postData={postData}/>
        </div>
    )
}
export default Profile;
