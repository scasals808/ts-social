import {createStore, combineReducers, applyMiddleware} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware  from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store