import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"

type PatsParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type PropsType = RouteComponentProps<PatsParamsType> & OwnPropsType
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
