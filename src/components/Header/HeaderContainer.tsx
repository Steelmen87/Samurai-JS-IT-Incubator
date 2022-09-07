import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserDataType} from "../../redux/header-Reducer";
import {instance} from "../../api/api";
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
        instance.get('auth/me')
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);