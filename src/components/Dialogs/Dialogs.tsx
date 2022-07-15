import React from 'react'
import style from './Dialogs.module.css'
import {Dialog} from "./DialogItem/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/State";


type PropsDialogType = {
    dialogData: Array<DialogType>
    messageData: Array<MessageType>
}
const Dialogs = (props: PropsDialogType) => {
    let {dialogData,messageData} = props

    let dialogsElements = dialogData.map(el => <Dialog name={el.name} id={el.id}avatar={el.avatar} />)
    let messagesData = messageData.map(el => <Message message={el.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesData}
            </div>
        </div>
    )
}
export default Dialogs;


