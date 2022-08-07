import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/State";

type Post = {
    id: string
    message: string
    likeCounter: number
}
type ProfileType = {
    postData: Array<Post>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfileType) => {
    let {postData, newPostText,dispatch} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={dispatch}
                //updateNewPostText={updateNewPostText}
                newPostText={newPostText}
                //addPost={addPost}
                postData={postData}/>
        </div>
    )
}
export default Profile;
