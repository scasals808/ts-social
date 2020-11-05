import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";
import {logout} from "../../Redux/auth-reducer";


type MapStatePropsType = {
    id: number
    login: string | null
    email: string | null
    isAuth: boolean
    photo: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderAPIContainer extends React.Component<PropsType> {
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
}) as MapStatePropsType

export const HeaderContainer = connect(mapStateProps, {logout})(HeaderAPIContainer)