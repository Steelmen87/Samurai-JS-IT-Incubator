import React from 'react'

import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-Reducer";

export type UserType = {
    id: string
    name: string
    status: string
    photos:{
        small:string
        large:string
    }
    followed:boolean
}

export type ResponseDatatype = {
    items: UserType
    totalCount:number
    error:string
}
const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: string) => {

            dispatch(followAC(id))
        },
        unfollow: (id: string) => {

            dispatch(unfollowAC(id))
        },
        setUsers: (users: ResponseDatatype) => {

            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)




