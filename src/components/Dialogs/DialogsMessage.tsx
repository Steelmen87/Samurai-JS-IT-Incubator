import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../utils/validators/Validators";
import Textarea from "../common/FormsControls/Textarea";

export type FormMessageType = {
    newMassageText: string
}
const max = maxLength(100)
const MessageForm = (props: InjectedFormProps<FormMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required,max]}
                name={"newMassageText"}
                placeholder={"newMassageText"}
            />
            <br/>
            <button>Add message!!!</button>
        </form>
    )
}
export const MessageFormRedux = reduxForm<FormMessageType>({
    form: 'MessageForm'
})(MessageForm);