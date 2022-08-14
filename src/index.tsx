import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import store, {RootState} from "./redux/redux-store";
import {Provider} from "./StoreContext";

let rerenderEntireTree = (state: RootState) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})