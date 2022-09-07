import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "./UsersContainer";
import userPhoto from "../../img/v211103.jpg";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

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
                {arrayPagesCount.map((p, i) => {
                    return <span
                        onClick={() => onClickPageChanged(p)}
                        className={currentPage == p ? styles.selectedPage : ''}
                        key={p + i}>{p}#
                        </span>

                })}
            </div>
            {users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}> <img
                            src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photoUser}
                            alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            onUnFollowHandler(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                usersAPI.unFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            onFollowHandler(u.id)
                                        }
                                    })
                            }}>Follow</button>
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