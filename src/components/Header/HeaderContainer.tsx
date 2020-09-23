import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";
import {getAuth} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    photo: string | null
}

type MapDispatchPropsType = {
    getAuth: (userId: number | null) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuth(this.props.id)
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

export const HeaderContainer = connect(mapStateProps, {getAuth})(HeaderAPIContainer)