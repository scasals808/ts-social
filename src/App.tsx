import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./Redux/state";


function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogsData={props.dialogsPage.dialogsData}
                        messagesData={props.dialogsPage.messagesData}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        postData={props.profilePage.postData}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
