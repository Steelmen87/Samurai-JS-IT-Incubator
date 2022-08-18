import React from 'react'

import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-Reducer";


const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: string) => {
            debugger
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            debugger
            dispatch(unfollowAC(id))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)




