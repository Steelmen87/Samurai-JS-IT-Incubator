import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator,
    setUserProfileType,
    updateStatusThunkCreator
} from "../../redux/Profile-Reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getUsersProfileThunkCreator(userId);
        props.getStatusThunkCreator(userId);
    }, [])
    const updateStatus = (status: string) => {
        props.updateStatusThunkCreator(status)
    }
    return <Profile profile={props.profile} status={props.status} updateStatus={updateStatus}/>
}

type mapStateToPropsType = {
    profile: profileType | null
    status: string | null
    authorizedUserId:string|null
    isAuth:boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.id,
    isAuth:state.auth.isAuth
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
//export default withAuthRedirect(connect(mapStateToProps, {getUsersProfileThunkCreator})(WithDataContainerComponent));
