import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}