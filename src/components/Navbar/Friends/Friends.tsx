import React from 'react'
import Friend from './Friend/Friend';
import style from './Friends.module.css'
import {initialStateType} from "../../../redux/Sidebar-Reducer";

export type FriendPropsType = {
    sidebar: initialStateType
}

const Friends = (props: FriendPropsType) => {
    const {sidebar} = props;
    return (
        <div className={style.friendFlex}>
            {sidebar.friends.map(f => <Friend key={f.id + f.name} state={f}/>)}
        </div>
    )
}
export default Friends;