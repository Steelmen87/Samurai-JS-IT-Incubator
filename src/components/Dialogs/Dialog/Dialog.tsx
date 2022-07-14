import {NavLink} from "react-router-dom";
import React from "react";
import style from './Dialog.module.css'

type DialogType = {
    name: string
    id: string
}
export const Dialog = (props: DialogType) => {
    const {name, id} = props;
    let path = '/dialogs/' + id;
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}