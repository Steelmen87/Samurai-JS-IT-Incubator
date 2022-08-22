import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, User} from "../../redux/Users-Reducer";
import {Dispatch} from "redux";

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
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

export type mapDispatchToPropsType = {
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: ResponseDatatype) => void
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)



