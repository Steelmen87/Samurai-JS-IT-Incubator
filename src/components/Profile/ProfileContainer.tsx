import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-Reducer";
import {AppStateType} from "../../redux/redux-store";

export type profileType = {
    aboutMe: string
    contacts: {
        facebook: string|null
        github: string|null
        instagram: string|null
        mainLink: string|null
        twitter: string|null
        vk: string|null
        website: string|null
        youtube: string|null
    }
    fullName: string|null
    lookingForAJob: boolean
    lookingForAJobDescription: string|null
    photos: {
        large: string
        small: string
    }
    userId: number
}
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profile:state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
