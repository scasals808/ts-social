import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";
import {setAuthUserData, setUserPhoto} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    photo: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    setUserPhoto: (photo: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true //отправляем сразу авторизованный запрос
        }) // кроссдоменный запрос
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                    let userId = this.props.id
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                        .then(response => {
                            this.props.setUserPhoto(response.data.photos.small)
                        })
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateProps = (state: RootStateReduxType): MapStatePropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    photo: state.auth.photo
})

export const HeaderContainer = connect(mapStateProps, {setAuthUserData, setUserPhoto})(HeaderAPIContainer)