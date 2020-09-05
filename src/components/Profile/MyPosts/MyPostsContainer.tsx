
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../Redux/profileReducer";
import {RootStateReduxType} from "../../../Redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsTypes)=> void) => {
    return {
        changeNewPostText: (newText: string) => {
            let action = updateNewPostText(newText)
            dispatch(action)
        },
        addPost: () =>{
            dispatch(addPost())
        }
    }
}*/
export const MyPostsContainer = connect(mapStateToProps,{
    updateNewPostText,
    addPost
})(MyPosts)