import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            {/*<img src='https://cs13.pikabu.ru/avatars/3066/x3066923-1218757612.png ' alt=''/>*/}
            <img src='https://avatars.mds.yandex.net/i?id=c325da3e0d0fc1f4b25c5182ae3440ea-5887571-images-thumbs&n=13' alt=''/>
        </header>
    )
}
export default Header;