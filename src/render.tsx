import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StorePropsTypeMain, updateNewPostText, changeDialogText, addDialogText} from './redux/State';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state:StorePropsTypeMain) => {
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
