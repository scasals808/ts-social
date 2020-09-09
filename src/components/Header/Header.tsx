import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    photo: string | null
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <img
            src='https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'/>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Log in</NavLink>}
    </div>
        <div className={s.photoBlock}>
            {props.isAuth ?
                props.photo
                : <img src='https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'/>}
        </div>
    </header>
}

export default Header;