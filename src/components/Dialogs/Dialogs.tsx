import React from 'react'
import style from './Dialogs.module.css'

type PropsType = {}
const Dialogs = (props: PropsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={`${style.dialog} ${style.active}`}>
                    Dimych
                </div>
            <div className={style.dialog}>
                    Andrey
                </div>
            <div className={style.dialog}>
                    Sveta
                </div>
            <div className={style.dialog}>
                    Valera
                </div>
            <div className={style.dialog}>
                    Viktor
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you</div>
                <div className={style.message}>Yo yO</div>
            </div>
        </div>
    )
}
export default Dialogs;