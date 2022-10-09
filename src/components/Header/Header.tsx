import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css';

type propsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const Header = ({isAuth, login, logout}: propsType) => {
    return (
        <header className={style.header}>
            <img src='https://avatars.mds.yandex.net/i?id=c325da3e0d0fc1f4b25c5182ae3440ea-5887571-images-thumbs&n=13'
                 alt=''/>
            <div className={style.loginBlock}>
                {isAuth
                    ? <div className={style.loginStyle}>{login}
                        <button onClick={logout}>log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;