import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "./UsersContainer";
import userPhoto from "../../img/v211103.jpg";

type propsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    onClickPageChanged: (p: number) => void
    onUnFollowHandler: (id: string) => void
    onFollowHandler: (id: string) => void
}
const Users = (props: propsType) => {
    const {
        users, pageSize,
        totalCount, currentPage,
        onFollowHandler, onUnFollowHandler,
        onClickPageChanged
    } = props
    let pagesCount: number = Math.ceil(totalCount / pageSize)
    let arrayPagesCount = []
    for (let i = 1; i <= pagesCount; i++) {
        arrayPagesCount.push(i)
    }
    return (
        <div>
            <div className={styles.flex}>
                {arrayPagesCount.map((p,i) => {
                    return <span
                        onClick={() => onClickPageChanged(p)}
                        className={currentPage == p ? styles.selectedPage : ''}
                        key={p+i}>{p}#
                        </span>

                })}
            </div>
            {users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photoUser}
                             alt=''/>
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