import {ActionsTypes, PostTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === ADD_POST) {
        let newPost: PostTypes = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        }
        state.postData.push(newPost);
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}
