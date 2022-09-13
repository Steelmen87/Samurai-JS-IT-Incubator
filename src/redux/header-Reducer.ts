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
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: string, email: string, login: string) => ({
    type: SET_USER_DATA,
    payload: {id, email, login}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    usersAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}
