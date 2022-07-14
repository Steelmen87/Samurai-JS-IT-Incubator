import style from "../Dialogs.module.css";
import React from "react";

type MessageProps = {
    message: string
}
const Message = (props: MessageProps) => {
    const {message} = props
    return (
        <div className={style.message}>{message}</div>
    )
}
export default Message;