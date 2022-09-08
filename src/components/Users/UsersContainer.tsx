import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowIsProgress,
    unfollow,
    UsersType,
    UserType
} from "../../redux/Users-Reducer";
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


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
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: ResponseDatatype) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowIsProgress: (isFetching: boolean, id: string) => void
}


class UsersContainer extends React.Component<any> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            /*instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)*/
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onFollowHandler = (id: string) => {
        this.props.follow(id)
    }
    onUnFollowHandler = (id: string) => {
        this.props.unfollow(id)
    }

    onClickPageChanged = (page: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(page)
        /*instance.get(`users?page=${page}&count=${this.props.pageSize}`)*/
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setToggleIsFetching(false)
            })
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
                    toggleFollowIsProgress={this.props.toggleFollowIsProgress}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching,
        toggleFollowIsProgress
    }
)(UsersContainer)



