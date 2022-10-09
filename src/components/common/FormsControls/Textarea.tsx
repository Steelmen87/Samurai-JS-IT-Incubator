import React from 'react';
import s from './Style.module.css'

const Textarea = ({input, meta, placeholder, props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.form_control} ${hasError ? s.error : ""}`}>
            <div>
                <textarea
                    placeholder={placeholder}
                    {...input}
                    {...props}
                />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export default Textarea;

export const Input = ({input, meta, placeholder, props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.form_control} ${hasError ? s.error : ""}`}>
            <div>
                <input
                    placeholder={placeholder}
                    {...input}
                    {...props}
                />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

