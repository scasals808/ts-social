import React from "react";
import {UsersTypes} from "../../Redux/store";
import s from './Users.module.css'
import axios from 'axios';


type UsersPropsTypes = {
    usersData: Array<UsersTypes>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (items: Array<UsersTypes>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsTypes> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={this.props.currentPage === p ? s.selectedPage : ''}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.usersData.map((user, index) => <div key={index}>
                <span>
                    <div>
                        <img
                            src={user.photos.small !== null ? user.photos.small : 'https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'}
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