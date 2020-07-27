import React from 'react';
import './index.css';
import state, {RootStateType, subscribe} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);