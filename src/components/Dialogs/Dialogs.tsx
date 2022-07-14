import React from 'react'
import style from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";


type PropsType = {}
const Dialogs = (props: PropsType) => {

    let dialogData = [
        {name: "Dimych", id: '1'},
        {name: "Andrey", id: '2'},
        {name: "Sveta", id: '3'},
        {name: "Valera", id: '4'},
        {name: "Viktor", id: '5'},
    ]
    let messageData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Yo yO'},
        {id: '4', message: 'Yo yO1'},
        {id: '5', message: 'Yo yO2'},
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogData.map(el => <Dialog name={el.name} id={el.id}/>)}

            </div>
            <div className={style.messages}>
                {messageData.map(el => <Message message={el.message}/>)}
            </div>
        </div>
    )
}
export default Dialogs;


