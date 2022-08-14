import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, UpdateNewPostTextType} from "../../redux/Profile-Reducer";
import {AddDialogTextType, ChangeDialogTextType} from "../../redux/Dialog-Reducer";

type Post = {
    id: string
    message: string
    likeCounter: number
}
type ProfileType = {
    postData: Array<Post>
    newPostText: string
    dispatch: (action: AddPostType | UpdateNewPostTextType | ChangeDialogTextType | AddDialogTextType) => void
}

const Profile = (props: ProfileType) => {
    let {postData, newPostText,dispatch} = props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={dispatch}

                newPostText={newPostText}

                postData={postData}/>
        </div>
    )
}
export default Profile;
