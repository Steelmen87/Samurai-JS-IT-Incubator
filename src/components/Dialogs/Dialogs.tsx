import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import {Dialog} from "./DialogItem/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/State";


type PropsDialogType = {
    dialogData: Array<DialogType>
    messageData: Array<MessageType>
    changeNewText(postMessage: string): void
    addDialogText(changeText: string): void
    message: string
}
const Dialogs = (props: PropsDialogType) => {
    let {dialogData, messageData, changeNewText, message, addDialogText} = props

    let dialogsElements = dialogData.map(el => <Dialog name={el.name} id={el.id} avatar={el.avatar}/>)
    let messagesData = messageData.map(el => <Message message={el.message}/>)

    let addMessage = () => {
        addDialogText(message)

    }
    const onChangeDialog = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewText(e.currentTarget.value)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesData}
            </div>
            <div className={style.addMessage}>
                <textarea
                    value={message}
                    onChange={onChangeDialog}
                />
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    )
}
export default Dialogs;


