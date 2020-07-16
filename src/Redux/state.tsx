import React from "react";
import {rerenderEntireTree} from "../render";

export type DialogItemTypes = {
    id: number
    name: string
}
export type MessageTypes = {
    id: number
    message: string
}
export type PostTypes = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postData: Array<PostTypes>
    newPostText: string
}

export type  DialogPageType = {
    dialogsData: Array<DialogItemTypes>
    messagesData: Array<MessageTypes>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 1, message: 'By', likesCount: 120}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dima',},
            {id: 2, name: 'Vova',},
            {id: 3, name: 'Tima',},
            {id: 4, name: 'Katya',},
            {id: 5, name: 'Misha',}
        ],
        messagesData: [
            {id: 1, message: 'yo'},
            {id: 1, message: 'ho'},
            {id: 1, message: 'hey'},
            {id: 1, message: 'go'},
            {id: 1, message: 'high'},
        ]
    }
}

export const addPost = ()  => {
    let newPost: PostTypes = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string)  => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state