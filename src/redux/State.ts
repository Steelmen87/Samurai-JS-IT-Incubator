let rerenderEntireTree = (state: StorePropsTypeMain) => {
    console.log('State was changed !')
}
export type DialogType = {
    id: string
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostDataType = {
    id: string
    message: string
    likeCounter: number
}
export type FriendType = {
    id: string
    name: string
    avatar: string
}

type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
type dialogsPageType = {
    messageData: Array<MessageType>
    dialogData: Array<DialogType>
    newMassageText: string
}

type sidebarType = {
    friends: Array<FriendType>
}

export type StorePropsTypeMain = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: sidebarType
}

export let state: StorePropsTypeMain = {
    profilePage: {
        postData: [
            {id: '1', message: 'Hi how are you ?', likeCounter: 4},
            {id: '2', message: 'It"s my second post', likeCounter: 34},
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messageData: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you'},
            {id: '3', message: 'Yo yO'},
            {id: '4', message: 'Yo yO1'},
            {id: '5', message: 'Yo yO2'},
        ],
        newMassageText: 'Dialog text',
        dialogData: [
            {
                name: "Dimych", id: '1',
                avatar: 'https://avatars.mds.yandex.net/i?id=6cd69ff70cc480826905181d80007878-5356799-images-thumbs&n=13'
            },
            {
                name: "Andrey", id: '2',
                avatar: 'https://avatars.mds.yandex.net/i?id=6cd69ff70cc480826905181d80007878-5356799-images-thumbs&n=13'
            },
            {
                name: "Sveta", id: '3',
                avatar: 'https://avatars.mds.yandex.net/i?id=6cd69ff70cc480826905181d80007878-5356799-images-thumbs&n=13'
            },
            {
                name: "Valera", id: '4',
                avatar: 'https://avatars.mds.yandex.net/i?id=6cd69ff70cc480826905181d80007878-5356799-images-thumbs&n=13'
            },
            {
                name: "Viktor!", id: '5',
                avatar: 'https://avatars.mds.yandex.net/i?id=6cd69ff70cc480826905181d80007878-5356799-images-thumbs&n=13'
            },
        ],
    },
    sidebar: {
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
        ]


    }
}
export let addPost = (message: string) => {
    let newPost: PostDataType = {
        id: '5',
        message: message,
        likeCounter: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const changeDialogText = (newText: string) => {
    state.dialogsPage.newMassageText = newText;
    rerenderEntireTree(state)
}
export let addDialogText = (message: string) => {
    let newMessage: MessageType = {
        id: '5',
        message: message,
    }
    state.dialogsPage.messageData.push(newMessage)
    state.dialogsPage.newMassageText = ''
    rerenderEntireTree(state)
}

type ObserverType = (state: StorePropsTypeMain)=>void

export const subscribe = (observer: ObserverType) => {
    rerenderEntireTree = observer
}