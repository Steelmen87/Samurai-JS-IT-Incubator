import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {RootStoreType, store} from "./redux/State";

let state = store.getState()
console.log(state)
let rerenderEntireTree = (state: RootStoreType) => {
    ReactDOM.render(
        <HashRouter>
            <App store={store}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state);
store.subscribe(rerenderEntireTree)