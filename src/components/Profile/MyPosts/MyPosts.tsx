import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostTypes} from "../../../Redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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

const maxLength10 = maxLengthCreator(10) //вызов валидатора вынесли из за ошибки,
    //конфликт из за замыкания

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
            <Field component={Textarea} placeholder='Enter message' name='NewPost' validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const PostReduxForm = reduxForm<MessageFormDataType>({
    form: 'message'
})(PostForm)