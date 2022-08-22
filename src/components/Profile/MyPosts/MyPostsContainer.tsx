import React from "react";
import {AddPostAC, profilePageType, UpdateNewPostTextAC} from "../../../redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: profilePageType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            text && dispatch(UpdateNewPostTextAC(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);