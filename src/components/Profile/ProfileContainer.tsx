import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"

type PatsParamsType = {
    userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}

type PropsType = RouteComponentProps<PatsParamsType> & OwnPropsType
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

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

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps,
    {getProfile})(withUrlDataContainerComponent)
