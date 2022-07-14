import React from 'react'
import style from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";


type PropsType = {}
const Dialogs = (props: PropsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name={'Dimych'} id='1'/>
                <Dialog name={'Andrey'} id='2'/>
                <Dialog name={'Sveta'} id='3'/>
                <Dialog name={'Valera'} id='4'/>
                <Dialog name={'Viktor'} id='5'/>
            </div>
            <div className={style.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo yO'}/>
                <Message message={'Yo yO1'}/>
                <Message message={'Yo yO2'}/>
            </div>
        </div>
    )
}
export default Dialogs;


