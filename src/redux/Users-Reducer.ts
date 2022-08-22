import {ActionTypeAll} from "./State";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


type locationType = {
    city: string, country: string
}
export type User = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
export type usersType = {
    users: Array<User>
}
const initialState = {
    users: [
       /* {
            id: '1',
            photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
            followed: true,
            fullName: 'Dmotriy',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
            followed: false,
            fullName: 'Ivan',
            status: 'I am  2',
            location: {city: 'Moscow', country: 'Rus'}
        },
        {
            id: '3',
            photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
            followed: true,
            fullName: 'Kolia',
            status: 'I am 3',
            location: {city: 'Kiev', country: 'Uk'}
        },*/
    ],

}
export const usersReducer = (state: usersType = initialState, action: ActionTypeAll) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case 'SET_USERS':
            return { ...state, users: [ ...state.users, ...action.users ]}
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

