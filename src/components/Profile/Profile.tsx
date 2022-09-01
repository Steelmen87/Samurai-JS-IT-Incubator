import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "./ProfileContainer";

type ProfileType = {
    profile: profileType
}
const Profile = (props: ProfileType) => {
    debugger
    return (
        <div>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
