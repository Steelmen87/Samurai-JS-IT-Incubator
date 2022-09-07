import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/Users-Reducer";
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {ActionTypeAll} from "../../redux/State";
import {usersAPI} from "../../api/api";

export type UserType = {
    id: string
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type ResponseDatatype = {
    items: UserType[]
    totalCount: number
    error: string
}
/*export type MapStateToPropsType = {
    users: UsersType
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}*/

const mapStateToProps = (state: AppStateType): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export type mapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: ResponseDatatype) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

type propsType = ActionTypeAll & UsersType & mapDispatchToPropsType
type StateType = {
    // описываем локальный стейт
    users: Array<UserType>
    onFollowHandler: (id: string) => void
    onUnFollowHandler: (id: string) => void
    onClickPageChanged: (page: number) => void
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
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching
    }
)(UsersContainer)



