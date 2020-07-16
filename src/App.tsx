import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./Redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogsData={props.state.dialogsPage}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        newPostText={props.newPostText}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
