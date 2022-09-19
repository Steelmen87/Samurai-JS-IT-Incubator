import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "./ProfileContainer";

type ProfileType = {
    profile: profileType

}
const Profile = ({profile }: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
