import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./Redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsData={props.store.getState().dialogsPage}
                    dispatch={props.store.dispatch.bind(props.store)}
                    newMessageText={props.store.getState().dialogsPage.newMessageText}
                />}/>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.store.getState().profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                    newPostText={props.store.getState().profilePage.newPostText}
                />}/>
            </div>
        </div>
    );
}

export default App;
