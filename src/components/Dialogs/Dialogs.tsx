import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import {dialogsPageType} from "../../redux/Dialog-Reducer";
import {Dialog} from "./DialogItem/Dialog";
import Message from "./Message/Message";


type PropsDialogType = {
    dialogsPage:dialogsPageType
    changeNewText: (e: string) => void
    addDialogText: (message: string) => void
}
const Dialogs = (props: PropsDialogType) => {
    const {addDialogText, changeNewText,dialogsPage} = props

    const dialogsElements = dialogsPage.dialogData.map((el, i) =>
        <Dialog key={i} name={el.name}
                id={el.id}
                avatar={el.avatar}/>)

    const messagesData = dialogsPage.messageData.map((el, i) =>
        <Message key={i}
                 message={el.message}/>)

    const addMessage = () => {
        addDialogText(dialogsPage.newMassageText)
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
                    value={dialogsPage.newMassageText}
                    onChange={onChangeDialog}
                />
                <button onClick={addMessage}>add message</button>
            </div>

        </div>
    )
}
export default Dialogs;


