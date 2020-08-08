import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItemTypes} from "../../../Redux/store";



const DialogItem = (props: DialogItemTypes) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
export default DialogItem;