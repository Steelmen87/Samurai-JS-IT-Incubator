import {ActionTypeAll} from "./State";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {profileType} from "../components/Profile/ProfileContainer";

export const GET_STATUS = 'GET_STATUS';
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostDataType = {
    id: string
    message: string
    likeCounter: number
}
export type profilePageType = {
    postData: Array<PostDataType>,
    newPostText: string,
    profile: profileType | null
    status: string | null
}
const initialState: profilePageType = {
    postData: [
        {id: '1', message: 'Hi how are you ?', likeCounter: 4},
        {id: '2', message: 'It"s my second post', likeCounter: 34},
    ] as Array<PostDataType>,
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: null


}


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
        case "GET_STATUS": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }

}
export type getStatusType = ReturnType<typeof getStatusAC>
export const getStatusAC = (status: string) => ({type: GET_STATUS, payload: {status}} as const)

export type AddPostType = ReturnType<typeof AddPostAC>
export const AddPostAC = (message: string) => ({type: ADD_POST, message} as const)

export type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: profileType) => ({type: SET_USER_PROFILE, profile} as const)

export type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)


export const getUsersProfileThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    if (userId === undefined) return
    profileAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)))
}
export const getStatusThunkCreator = (userId: string) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
        .then(data => dispatch(getStatusAC(data.data)))
}
export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {

    profileAPI.updateStatus(status)
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(getStatusAC(status))
            }
        })
}

