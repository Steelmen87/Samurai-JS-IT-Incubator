import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4e5aee81-42dd-43de-87fa-a601a9c1e88b"
    }
});
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    follow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(res => {
                return res.data
            })
    },
    unFollow(id: string) {
        return instance.post(`follow/${id}`)
            .then(res => {
                return res.data
            })
    }
}
