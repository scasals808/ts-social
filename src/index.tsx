import React from 'react';
import './index.css';
import {store, StoreType} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree()