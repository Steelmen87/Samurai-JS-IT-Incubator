import React from 'react'
import Friend from './Friend/Friend';
import style from './Friends.module.css'

type FriendType = {
    id: string
    name: string
    avatar: string
}
type FriendPropsType = {
    friends: Array<FriendType>
}

const Friends = (props: FriendPropsType) => {
    const {friends} = props;
    return (
        <div className={style.friendFlex}>
            {friends.map(f => <Friend key={f.id + f.name} state={f}/>)}
        </div>
    )
}
export default Friends;