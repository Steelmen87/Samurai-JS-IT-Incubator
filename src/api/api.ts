import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "4e5aee81-42dd-43de-87fa-a601a9c1e88b"
    }
});