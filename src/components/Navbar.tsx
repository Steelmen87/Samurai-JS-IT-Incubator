import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}><a>Profile</a></div>
            <div className={style.item}><a>Message</a></div>
            <div className={style.item}><a>New</a></div>
            <div className={style.item}><a>Music</a></div>
            <div className={style.item}><a>Settings</a></div>
        </nav>
    )
}
export default Navbar;