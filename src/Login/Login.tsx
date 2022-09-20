import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
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

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
