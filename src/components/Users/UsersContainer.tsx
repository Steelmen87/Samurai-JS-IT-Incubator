import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followingThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowIsProgress,
    unfollow,
    unfollowingThunkCreator,
    UsersType,
    UserType
} from "../../redux/Users-Reducer";
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";


export type ResponseDatatype = {
    items: UserType[]
    totalCount: number
    error: string
}

const mapStateToProps = (state: AppStateType): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
export type mapDispatchToPropsType = {
    setUsers: (users: ResponseDatatype) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
    setToggleIsFetching: (isFetching: boolean) => void

}


class UsersContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onFollowHandler = (id: number) => {
        this.props.followingThunkCreator(id)
    }
    onUnFollowHandler = (id: number) => {
        this.props.unfollowingThunkCreator(id)
    }

    onClickPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    followingInProgress={this.props.followingInProgress}
                    users={this.props.users}
                    onClickPageChanged={this.onClickPageChanged}
                    onFollowHandler={this.onFollowHandler}
                    onUnFollowHandler={this.onUnFollowHandler}
                    totalCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps,
    {
        getUsersThunkCreator,
        unfollowingThunkCreator,
        followingThunkCreator,

        setCurrentPage
    }
)(UsersContainer)



