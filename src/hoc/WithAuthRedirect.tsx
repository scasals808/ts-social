import React from "react";
import {Redirect} from "react-router-dom";
import {RootStateReduxType} from "../Redux/redux-store";
import {connect} from "react-redux";

let MapStateToPropsForRedirect = (state: RootStateReduxType) => ( {
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
