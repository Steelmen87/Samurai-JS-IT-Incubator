import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "./ProfileContainer";

type ProfileType = {
    profile: profileType
    status: string
    updateStatus:Function
}
const Profile = ({profile,status,updateStatus}: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
