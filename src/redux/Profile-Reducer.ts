import {ActionTypeAll} from "./State";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostDataType = {
    id: string
    message: string
    likeCounter: number
}

const initialState = {
    postData: [
        {id: '1', message: 'Hi how are you ?', likeCounter: 4},
        {id: '2', message: 'It"s my second post', likeCounter: 34},
    ] as Array<PostDataType>,
    newPostText: 'it-kamasutra.com',
    profile: null,

}
export type profilePageType = typeof initialState

export const profileReducer = (state: profilePageType = initialState, action: ActionTypeAll): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: '5',
                message: action.message,
                likeCounter: 0
            }
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            }
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}
export type AddPostType = ReturnType<typeof AddPostAC>
export const AddPostAC = (message: string) => ({type: ADD_POST, message} as const)

export type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

export type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)


export const getUsersProfileThunkCreator = (res: string) => (dispatch: Dispatch) => {
    authAPI.getProfile(res)
        .then(data => dispatch(setUserProfile(data)))
}
