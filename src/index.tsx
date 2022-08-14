import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import store, {RootState} from "./redux/redux-store";


let rerenderEntireTree = (state: RootState) => {
    debugger
    ReactDOM.render(
        <HashRouter>
            <App state={state}
                 store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </HashRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)})