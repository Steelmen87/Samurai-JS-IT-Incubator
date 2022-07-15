import React from 'react'
import Friend from './Friend/Friend';

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
        <div>
            {friends.map(f => <Friend state={f}/>)}
        </div>
    )
}
export default Friends;