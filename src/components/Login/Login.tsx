import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}



export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'Remember me'} component={Input} validate={[required]}/>
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>

}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

const Login = (props: OwnPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: RootStateReduxType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login)