import {ActionTypeAll} from "./State";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type initialState = {
    id: string | null,
    email: string | null,
    login: string | null,
    isFetching: boolean
    isAuth: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}
export const authReducer = (state: initialState = initialState, action: ActionTypeAll) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    usersAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    usersAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData())
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    usersAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}
