import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {dialogReducer} from "./Dialog-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";
import {usersReducer} from "./Users-Reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(rootReducer)
export default store;
// @ts-ignore
window.__store__ = store
export type RootState = ReturnType<typeof store.getState>

