import React from 'react'

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, initialStateType, UserType} from "../../redux/Users-Reducer";
import {Dispatch} from "redux";

type mapSTateToPropsType = {
    users: Array<UserType>
}

const mapStateToProps = (state: AppStateType): mapSTateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

type mapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            debugger
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            debugger
            dispatch(unfollowAC(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)




