import {AddPostType, setUserProfileType, UpdateNewPostTextType} from "./Profile-Reducer";
import {AddDialogTextType, ChangeDialogTextType} from "./Dialog-Reducer";
import {
    followACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    setUsersACType, toggleIsFetchingType,
    unfollowACType
} from "./Users-Reducer";
import {setUserDataType} from "./header-Reducer";

export type ActionTypeAll = UpdateNewPostTextType
    | AddPostType
    | AddDialogTextType
    | ChangeDialogTextType
    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingType
    | setUserProfileType
    | setUserDataType

export type MessageType = {
    id: string
    message: string
}
export type FriendType = {
    id: string
    name: string
    avatar: string
}



