import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../img/v211103.jpg";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/Users-Reducer";

type propsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    onClickPageChanged: (p: number) => void
    onUnFollowHandler: (id: number) => void
    onFollowHandler: (id: number) => void
    // toggleFollowIsProgress: (isFetching: boolean, id: string) => void
    followingInProgress: number[]
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
                            ? <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    onUnFollowHandler(u.id);
                                }}>Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    onFollowHandler(u.id)
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