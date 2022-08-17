import React from "react";
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import style from './Navbar.module.css'


type PropsType = {

}

const Navbar = (props: PropsType) => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item}`}>
                <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink></div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/new' activeClassName={style.activeLink}>New</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='music' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={`${style.item} ${style.friends}`}>
                {/* <NavLink to='/friends' activeClassName={style.activeLink}>*/}Friends{/*</NavLink>*/}
            </div>
            <FriendsContainer />
        </nav>
    )
}

export default Navbar;