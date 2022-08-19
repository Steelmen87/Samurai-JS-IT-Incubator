import {ActionTypeAll} from "./State";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


type locationType = {
    city: string, country: string
}
export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
export type initialStateType = {
    users: Array<UserType>
}
const initialState = {
    users: []

}
export const usersReducer = (state: initialStateType = initialState, action: ActionTypeAll): initialStateType => {
    debugger
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id == action.id ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id == action.id ? {...u, followed: false} : u)
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export type followACType = ReturnType<typeof followAC>
export const followAC = (id: string) => ({type: FOLLOW, id} as const)


export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: string) => ({type: UNFOLLOW, id} as const)

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

