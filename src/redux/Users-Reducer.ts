import {ActionTypeAll} from "./State";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true
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
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.total
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }

}

export type followACType = ReturnType<typeof followAC>
export const followAC = (id: string) => ({type: FOLLOW, id} as const)

export type toggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (total: number) => ({type: SET_TOTAL_USERS_COUNT, total} as const)


export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: string) => ({type: UNFOLLOW, id} as const)

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

