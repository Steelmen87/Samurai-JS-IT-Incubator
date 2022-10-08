import React from 'react'
import style from './Dialogs.module.css'
import {initialStateType} from "../../redux/Dialog-Reducer";
import {Dialog} from "./DialogItem/Dialog";
import Message from "./Message/Message";
import {FormMessageType, MessageFormRedux} from "./DialogsMessage";


type PropsDialogType = {
    dialogsPage: initialStateType
    changeNewText: (e: string) => void
    addDialogText: (message: string) => void
    isAuth: boolean
}
const Dialogs = (props: PropsDialogType) => {
    const {addDialogText,  dialogsPage, isAuth} = props

    const dialogsElements = dialogsPage.dialogsData.map((el, i) =>
        <Dialog key={i} name={el.name}
                id={el.id}
                avatar={el.avatar}/>)

    const messagesData = dialogsPage.messageData.map((el, i) =>
        <Message key={i}
                 message={el.message}/>)

    const addMessage = (values: FormMessageType) => {
        addDialogText(values.newMassageText)
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
                <MessageFormRedux onSubmit={addMessage}/>
            </div>

        </div>
    )
}
export default Dialogs;


