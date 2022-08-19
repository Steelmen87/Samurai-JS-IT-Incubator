export type FriendType = {
    id: string
    name: string
    avatar: string
}
const initialState = {
    friends: [
        {
            id: '1',
            name: 'Vasia',
            avatar: 'https://avatars.mds.yandex.net/i?id=56c28fdf329d24378e1afc0f16f3ccc9-4034590-images-thumbs&n=13',
        },
        {
            id: '2',
            name: 'Kolia',
            avatar: 'https://avatars.mds.yandex.net/i?id=56c28fdf329d24378e1afc0f16f3ccc9-4034590-images-thumbs&n=13',
        },
        {
            id: '3',
            name: 'Vita',
            avatar: 'https://avatars.mds.yandex.net/i?id=56c28fdf329d24378e1afc0f16f3ccc9-4034590-images-thumbs&n=13',
        },
        {
            id: '4',
            name: 'Dani',
            avatar: 'https://avatars.mds.yandex.net/i?id=56c28fdf329d24378e1afc0f16f3ccc9-4034590-images-thumbs&n=13',
        },
        {
            id: '5',
            name: 'Vlad',
            avatar: 'https://avatars.mds.yandex.net/i?id=56c28fdf329d24378e1afc0f16f3ccc9-4034590-images-thumbs&n=13',
        },
    ]as Array<FriendType>
}

export type initialStateType = typeof initialState

export const sidebarReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    return state
}