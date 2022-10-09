import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/Textarea";
import {required} from "../utils/validators/Validators";
import {connect} from "react-redux";
import {initialState, login} from "../redux/header-Reducer";
import {Redirect} from "react-router-dom";
import {initialStateType} from "../redux/Dialog-Reducer";
import {AppStateType} from "../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required]}
                    component={Input}
                    name={"login"}
                    placeholder={"login"}/>
            </div>
            <div>
                <Field
                    validate={[required]}
                    component={Input}
                    name={"password"}
                    placeholder={"Password"}/>
            </div>
            <div>
                <Field
                    component={"input"}
                    name={"rememberMe"}
                    type={"checkbox"}/>
                remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        const {login, password, rememberMe} = formData
        props.login(login, password, rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);
