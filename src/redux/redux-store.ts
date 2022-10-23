import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {dialogReducer} from "./Dialog-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {usersReducer} from "./Users-Reducer";
import {authReducer} from "./header-Reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-Reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))
export default store;
// @ts-ignore
window.__store__ = store
export type AppStateType = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>