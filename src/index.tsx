import React from 'react';
import './index.css';
import {
    addDialogText,
    addPost,
    changeDialogText,
    state,
    StorePropsTypeMain,
    subscribe,
    updateNewPostText
} from "./redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state:StorePropsTypeMain) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                addDialogText={addDialogText}
                changeNewText={changeDialogText}
                updateNewPostText={updateNewPostText}
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree)