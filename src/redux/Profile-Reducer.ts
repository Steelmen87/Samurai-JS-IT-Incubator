import {ActionTypeAll} from "./State";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostDataType = {
    id: string
    message: string
    likeCounter: number
}
type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export const profileReducer = (state: profilePageType, action: ActionTypeAll) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: '5',
                message: action.message,
                likeCounter: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }

}
export type AddPostType = ReturnType<typeof AddPostAC>
export const AddPostAC = (message: string) => ({type: ADD_POST, message} as const)

export type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
