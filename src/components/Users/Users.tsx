import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/v211103.jpg'
import {mapDispatchToPropsType, MapStateToPropsType, UserType} from "./UsersContainer";

type propsType = UserType[] & MapStateToPropsType & mapDispatchToPropsType

class Users extends React.Component<propsType | any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    onFollowHandler = (id: string) => {
        this.props.follow(id)
    }
    onUnFollowHandler = (id: string) => {
        this.props.unfollow(id)
    }

    render() {
        const {users} = this.props

        return (
            <div>
                {users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photoUser}
                             alt=''/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.onUnFollowHandler(u.id)}>Follow</button>
                            : <button onClick={() => this.onFollowHandler(u.id)}>Unfollow</button>
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
    }
}

export default Users;