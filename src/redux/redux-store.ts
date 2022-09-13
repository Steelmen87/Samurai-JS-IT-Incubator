import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {dialogReducer} from "./Dialog-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {usersReducer} from "./Users-Reducer";
import {authReducer} from "./header-Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

let store = createStore(rootReducer,applyMiddleware(thunk))
export default store;
// @ts-ignore
window.__store__ = store
export type AppStateType = ReturnType<typeof store.getState>

