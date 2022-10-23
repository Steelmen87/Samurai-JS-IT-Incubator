import {ActionTypeAll} from "./State";
import {getAuthUserData} from "./header-Reducer";

export const GET_INITIALIZED = 'GET_INITIALIZED';


export type profilePageType = {
    initialized: boolean
}
const initialState: profilePageType = {
    initialized: false
}

export const appReducer = (state: profilePageType = initialState, action: ActionTypeAll): profilePageType => {
    switch (action.type) {
        case GET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}
export type initializedType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({type: GET_INITIALIZED} as const)

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })
}


