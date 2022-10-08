import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormPostType = {
    newPostText: string
}
const PostForm = (props: InjectedFormProps<FormPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={"textarea"}
                name={"newPostText"}
                placeholder={"newPostText"}
            />
            <br/>
            <button>Add post</button>
        </form>
    )
}
export const PostFormRedux = reduxForm<any>({
    form: 'PostsForm'
})(PostForm);