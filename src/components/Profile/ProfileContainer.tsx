import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';

type PatsParamsType = {
    userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}

type PropsType = RouteComponentProps<PatsParamsType> & OwnPropsType
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
    profile: state.profilePage.profile
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile}),
)(ProfileContainer)





