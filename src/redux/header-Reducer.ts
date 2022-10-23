import {ActionTypeAll} from "./State";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./redux-store";

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

export const getAuthUserData = () => (dispatch: Dispatch<setUserDataType>) => {
    return usersAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    usersAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
                console.log(message)

                const action = stopSubmit("login", {_error: message});
                dispatch(action)
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
