import React from "react";
import {usersPageType, UsersTypes} from "../../Redux/store";
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/image/user.png'

type UsersPropsTypes = {
    usersData: Array<UsersTypes>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (items: Array<UsersTypes>) => void
}
type GetDataType = {
    usersData: Array<UsersTypes>
}

class Users extends React.Component<UsersPropsTypes> {

    constructor(props: UsersPropsTypes) {
        super(props);
        debugger
        if (this.props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return <div>
            {
                this.props.usersData.map((user, index) => <div key={index}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : 'userPhoto'}
                             className={s.usersPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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
}

export default Users