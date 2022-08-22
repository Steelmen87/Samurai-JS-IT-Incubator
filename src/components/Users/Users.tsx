import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/v211103.jpg'
import {UserType} from "./UsersContainer";


type PropsType = {
    users: UserType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
}

const Users = (props: PropsType) => {
    const {setUsers, users, unfollow, follow} = props
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res=>{
                setUsers(res.data.items)
            })
    }
    const onFollowHandler = (id: string) => {
        follow(id)
    }
    const onUnFollowHandler = (id: string) => {
        unfollow(id)
    }
    return (
        <div>
            {users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small: userPhoto} className={styles.photoUser} alt=''/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => onUnFollowHandler(u.id)}>Follow</button>
                            : <button onClick={() => onFollowHandler(u.id)}>Unfollow</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)}
        </div>
    );
};

export default Users;