import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';

type PatsParamsType = {
    userId: string
    id: string
    // isAuth: boolean
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    updateStatus: (status: string) => void
    getStatus: (userId: number) => void
}

type PropsType = RouteComponentProps<PatsParamsType> & OwnPropsType
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id
        }
        this.props.getProfile(Number(userId))
        this.props.getStatus(Number(userId))
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile, updateStatus, getStatus}),
)(ProfileContainer)





