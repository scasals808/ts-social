import React from "react";
import s from "./Users.module.css";
import {UsersTypes} from "../../Redux/store";
import {NavLink} from "react-router-dom";

type PropsTypes = {
    usersData: Array<UsersTypes>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
}

export let Users = (props: PropsTypes) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span key={index} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p}</span>
            })}
        </div>
        {
            props.usersData.map((user, index) => <div key={index}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img
                            src={user.photos.small !== null ? user.photos.small : 'https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'}
                            className={s.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unFollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}