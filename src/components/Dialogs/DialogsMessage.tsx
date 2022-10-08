import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormMessageType = {
    newMassageText: string
}
const MessageForm = (props: InjectedFormProps<FormMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={"textarea"}
                name={"newMassageText"}
                placeholder={"newMassageText"}
            />
            <br/>
            <button>Add message</button>
        </form>
    )
}
export const MessageFormRedux = reduxForm<FormMessageType>({
    form: 'MessageForm'
})(MessageForm);