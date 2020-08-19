import React from "react";
import {UsersTypes} from "../../Redux/store";
import s from './Users.module.css'

type UsersPropsTypes = {
    usersData: Array<UsersTypes>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersTypes>) => void
}

export let Users = (props: UsersPropsTypes) => {
debugger
    if(props.setUsers.length === 0) {
        debugger
        props.setUsers([
            {
                id: 1, imgUrl: 'https://p.kindpng.com/picc/s/563-5634840_cheems-doge-transparent-hd-png-download.png',
                followed: true, name: 'Dmitry', status: ' I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ6AZlppXtCJXJw7a5VujMBdE86vE2aRc59g&usqp=CAU',
                followed: false,
                name: 'Sasha',
                status: ' I asm a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3, imgUrl: 'https://i.imgflip.com/4/3cqykx.jpg',
                followed: true, name: 'Andrew', status: ' I asm a boss',
                location: {city: 'Kyiv', country: 'Ukraine'}
            }
        ])
    }

    debugger;
    return <div>
        {
            props.usersData.map((user, index) => <div key={index}>
                <span>
                    <div>
                        <img src={user.imgUrl} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
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
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}