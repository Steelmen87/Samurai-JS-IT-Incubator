import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfileThunkCreator, setUserProfileType} from "../../redux/Profile-Reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type profileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    }
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: {
        large: string
        small: string
    }
    userId: number
}

function ProfileContainer(props: any) {

    useEffect(() => {
        let userId = props.match.params.userId
        let res = !userId ? '18301' : userId
        props.getUsersProfileThunkCreator(res)
    }, [])
    return <Profile profile={props.profile}/>
}

type mapStateToPropsType = {
    profile: profileType | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType & mapDispatchToProps

type OwnPropsType = mapStateToPropsType & setUserProfileType

const WithDataContainerComponent = withRouter(ProfileContainer)

type mapDispatchToProps = {
    setUserProfile: (profile: profileType) => void
}

export default connect(mapStateToProps, {getUsersProfileThunkCreator})(WithDataContainerComponent);
