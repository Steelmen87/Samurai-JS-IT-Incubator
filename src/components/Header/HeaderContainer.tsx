import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setUserData, setUserDataType} from "../../redux/header-Reducer";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";

type propsType = mapStateToPropsType & setUserDataType

type StateType = {
    setUserData: (id: string, email: string, login: string) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<propsType | any> {
    /* state: StateType = {
         setUserData: setUserData,
         isAuth: this.props.isAuth,
         login: this.props.login,
     }*/

    componentDidMount() {
        this.props.getUserAuthIsLogin()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData,getUserAuthIsLogin: getAuthUserData})(HeaderContainer);