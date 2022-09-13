import {ActionTypeAll} from "./State";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type UsersType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state: UsersType = initialState, action: ActionTypeAll) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }

}

export type followIsProgressType = ReturnType<typeof toggleFollowIsProgress>
export const toggleFollowIsProgress = (isFetching: boolean, id: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching
    , id
} as const)

export type followACType = ReturnType<typeof follow>
export const follow = (id: number) => ({type: FOLLOW, id} as const)

export type toggleIsFetchingType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (total: number) => ({type: SET_TOTAL_USERS_COUNT, total} as const)


export type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => ({type: UNFOLLOW, id} as const)

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setToggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const unfollowingThunkCreator = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowIsProgress(true, id))
    usersAPI.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
               dispatch(unfollow(id))
            }
            dispatch(toggleFollowIsProgress(false, id))
        })
}
export const followingThunkCreator = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowIsProgress(true, id))
    usersAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
               dispatch(follow(id))
            }
            dispatch(toggleFollowIsProgress(false, id))
        })
}

