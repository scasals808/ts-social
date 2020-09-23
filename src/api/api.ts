import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0bbbf023-77a9-44fe-841d-51e508b8f676'
    }
}) //базовые настройки для запросов

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, null)
            .then(response => response.data)
    },
    getUserProfile(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authApi = {
    getAuthProfile() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}



