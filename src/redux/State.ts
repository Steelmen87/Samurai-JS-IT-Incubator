import {AddPostType, UpdateNewPostTextType} from "./Profile-Reducer";
import {AddDialogTextType, ChangeDialogTextType} from "./Dialog-Reducer";
import {followACType, setUsersACType, unfollowACType} from "./Users-Reducer";

export type ActionTypeAll = UpdateNewPostTextType
    | AddPostType
    | AddDialogTextType
    | ChangeDialogTextType
    | followACType
    | unfollowACType
    | setUsersACType

export type MessageType = {
    id: string
    message: string
}
export type FriendType = {
    id: string
    name: string
    avatar: string
}



