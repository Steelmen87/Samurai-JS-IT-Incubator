import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-Reducer";
import {dialogReducer} from "./Dialog-Reducer";
import {sidebarReducer} from "./Sidebar-Reducer";

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducer
})

let store = createStore(rootReducer)
export default  store;
export type RootState = ReturnType<typeof store.getState>

