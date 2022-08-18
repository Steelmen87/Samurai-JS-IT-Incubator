import React from 'react';
import styles from './Users.module.css'


type PropsType = {
    users: any
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: any) => void
}

const Users = (props: PropsType) => {
    const {setUsers, users, unfollow, follow} = props
    if (users.length === 0) {
        setUsers([
            {
                id: '1',
                photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
                followed: true,
                fullName: 'Dmotriy',
                status: 'I am boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '2',
                photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'I am  2',
                location: {city: 'Moscow', country: 'Rus'}
            },
            {
                id: '3',
                photoUrl: 'http://8tv.ru/upload/iblock/d06/d06a9ad14b4d050657c2b45f0f3c7d40.jpg',
                followed: true,
                fullName: 'Kolia',
                status: 'I am 3',
                location: {city: 'Kiev', country: 'Uk'}
            },
        ])
    }
    const onFollowHandler = (id: string) => {
        follow(id)
    }
    const onUnFollowHandler = (id: string) => {
        unfollow(id)
    }
    return (
        <div>
            {users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photoUser} alt=''/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)}
        </div>
    );
};

export default Users;