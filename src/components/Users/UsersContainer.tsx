import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    User
} from "../../redux/Users-Reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

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
    items: UserType
    totalCount: number
    error: string
}
export type MapStateToPropsType = {
    users: Array<User>
    totalCount: number
    pageSize:number
    currentPage:number
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
    }
}

export type mapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: ResponseDatatype) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (total: number) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: ResponseDatatype) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page:number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (total:number) => {
            dispatch(setTotalUsersCountAC(total))
        }
    }
}

type propsType = UserType[] & MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<propsType | any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onFollowHandler = (id: string) => {
        this.props.follow(id)
    }
    onUnFollowHandler = (id: string) => {
        this.props.unfollow(id)
    }

    onClickPageChanged = (page: number) => {
        debugger
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        return (
            <Users
                users={this.props.users}
                onClickPageChanged={this.onClickPageChanged}
                onFollowHandler={this.onFollowHandler}
                onUnFollowHandler={this.onUnFollowHandler}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
            />
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



