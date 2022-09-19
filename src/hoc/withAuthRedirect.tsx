import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from '../redux/redux-store';

type returnStateType = {
    isAuth: boolean
}
const mstp = (state: AppStateType): returnStateType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: Function) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mstp)(RedirectComponent)
}