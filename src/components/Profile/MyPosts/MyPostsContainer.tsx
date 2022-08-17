import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/Profile-Reducer";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            text && dispatch(UpdateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;