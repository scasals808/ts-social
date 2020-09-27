import React from "react";
import {connect} from "react-redux";
import {UsersTypes} from "../../Redux/store";
import {
    follow,
    unFollow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
} from "../../Redux/usersReducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    usersData: Array<UsersTypes>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        //используем санку, логика запроса в редьюсере
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersData={this.props.usersData}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let withRedirect = withAuthRedirect(UsersContainer)

// export default withAuthRedirect(connect(mapStateToProps,
//     {
//         follow, unFollow, setCurrentPage,
//         toggleFollowingInProgress, getUsers
//     })(UsersContainer))

export default compose(withAuthRedirect,
    connect(mapStateToProps,
        {
            follow, unFollow, setCurrentPage,
            toggleFollowingInProgress, getUsers
        }))(UsersContainer)
/*
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (items: Array<UsersTypes>) => {
            dispatch(setUsersAC(items))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/
//инкапсулированная логика в мапдиспачтупропсе

