import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/Validators";
import Textarea from "../../common/FormsControls/Textarea";

export type FormPostType = {
    newPostText: string
}
const max = maxLength(10)
const PostForm = (props: InjectedFormProps<FormPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={"newPostText"}
                placeholder={"PostText"}
                validate={[required, max]}
            />
            <br/>
            <button>Add post</button>
        </form>
    )
}
export const PostFormRedux = reduxForm<any>({
    form: 'PostsForm'
})(PostForm);