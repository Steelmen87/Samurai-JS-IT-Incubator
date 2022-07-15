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
}

const Profile = (props: ProfileType) => {
    let {postData} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )
}
export default Profile;
