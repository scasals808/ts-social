
import {addPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogsReducer";

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
    newMessageText: string

}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: {}
}

// export type StoreType = {
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof sendMessageActionCreator>

// export let store: StoreType = {
//     state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: 'Hi', likesCount: 12},
//                 {id: 1, message: 'By', likesCount: 120}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Dima',},
//                 {id: 2, name: 'Vova',},
//                 {id: 3, name: 'Tima',},
//                 {id: 4, name: 'Katya',},
//                 {id: 5, name: 'Misha',}
//             ],
//             messagesData: [
//                 {id: 1, message: 'yo'},
//                 {id: 1, message: 'ho'},
//                 {id: 1, message: 'hey'},
//                 {id: 1, message: 'go'},
//                 {id: 1, message: 'high'},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     callSubscriber() {
//         console.log('Hi')
//     },
//     subscribe(observer) {
//         this.callSubscriber = observer;
//     },
//     getState() {
//         return this.state
//     },
//     dispatch(action) {
//         this.state.profilePage = profileReducer(this.state.profilePage, action)
//         this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
//         this.state.sidebar = sidebarReducer(this.state.sidebar, action)
//         this.callSubscriber()
//     }
// }

// export type ActionsTypes = AddPostActionType | UpdateNewPostTextType
// type AddPostActionType = {
//     type: 'ADD_POST'
//     postText: string
// }
// type UpdateNewPostTextType = {
//     type: 'UPDATE_NEW_POST_TEXT'
//     newText: string
// }
// type AddPostActionType = ReturnType<typeof addPostActionCreator>
// type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

