import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {RootStateType, StoreType} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/profile'} render={() => <Profile />}/>
            </div>
        </div>
    );
}

export default App;
