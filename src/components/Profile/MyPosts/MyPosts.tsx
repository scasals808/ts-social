import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostTypes} from "../../../Redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    postData: Array<PostTypes>
    addPost: (NewPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.postData.map((props, index) => {
        return <Post key={index}
                     id={props.id}
                     message={props.message}
                     likesCount={props.likesCount}/>
    });

    let addNewPost = (values: MessageFormDataType) => {
        props.addPost(values.NewPost)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <PostReduxForm onSubmit={addNewPost}/>
        <div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    </div>
}

type MessageFormDataType = {
    NewPost: string
}

export const PostForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {

    // let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = event.currentTarget.value
    //     props.updateNewPostText(newText)
    // }
    //
    // let onAddPost = () => {
    //     props.addPost()
    // }
    //
    // let newPostText = props.newPostText

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='NewPost' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Add Post</button>
            <button>Remove</button>
        </div>
    </form>

}

const PostReduxForm = reduxForm<MessageFormDataType>({
    form: 'message'
})(PostForm)