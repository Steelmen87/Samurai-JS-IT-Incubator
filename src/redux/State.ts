export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const CHANGE_DIALOG_TEXT = 'CHANGE-DIALOG-TEXT';
export const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';

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
export type RootStoreType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: sidebarType
}

export type StoreType = {
    _state: {
        profilePage: profilePageType,
        dialogsPage: dialogsPageType,
        sidebar: sidebarType
    }
    //addPost: (message: string) => void
    //updateNewPostText: (newText: string) => void
    //changeDialogText: (newText: string) => void
    //addDialogText: (message: string) => void
    _onChange: (state: RootStoreType) => void
    subscribe: (callBack: (state: RootStoreType) => void) => void
    getState: () => RootStoreType
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
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
    },
    /*addPost(message: string) {
        console.log('addPost')
        let newPost: PostDataType = {
            id: '5',
            message: message,
            likeCounter: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange(this._state)
    },*/
    /*changeDialogText(newText: string) {
        this._state.dialogsPage.newMassageText = newText;
        this._onChange(this._state)
    },
    addDialogText(message: string) {
        let newMessage: MessageType = {
            id: '5',
            message: message,
        }
        this._state.dialogsPage.messageData.push(newMessage)
        this._state.dialogsPage.newMassageText = ''
        this._onChange(this._state)
    },*/

    _onChange() {
        console.log('State was changed !')
    },
    subscribe(observer) {
        console.log('this._onChange')
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostDataType = {
                id: '5',
                message: action.message,
                likeCounter: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._onChange(this._state)
        } else if (action.type === CHANGE_DIALOG_TEXT) {
            this._state.dialogsPage.newMassageText = action.newText;
            this._onChange(this._state)
        } else if (action.type === ADD_DIALOG_TEXT) {
            let newMessage: MessageType = {id: '5', message: action.message,}
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.newMassageText = ''
            this._onChange(this._state)
        }

    }

}
type AddPostType = ReturnType<typeof AddPostAC>
export const AddPostAC = (message: string) => ({type: ADD_POST, message} as const)

type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)

type ChangeDialogTextType = ReturnType<typeof ChangeDialogTextAC>
export const ChangeDialogTextAC = (newText: string) => ({type: CHANGE_DIALOG_TEXT, newText} as const)

type AddDialogTextType = ReturnType<typeof AddDialogTextAC>
export const AddDialogTextAC = (message: string) => ({type: ADD_DIALOG_TEXT, message} as const)

export type ActionType = AddPostType | UpdateNewPostTextType | ChangeDialogTextType | AddDialogTextType
