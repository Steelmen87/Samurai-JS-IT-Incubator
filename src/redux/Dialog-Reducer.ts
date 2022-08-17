import {ActionTypeAll} from "./State";

const CHANGE_DIALOG_TEXT = 'CHANGE-DIALOG-TEXT';
const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';

export type DialogType = {
    id: string
    name: string
    avatar: string
}
type MessageType = {
    id: string
    message: string
}
export type dialogsPageType = {
    messageData: Array<MessageType>
    dialogData: Array<DialogType>
    newMassageText: string
}
const initialState = {
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
}
export const dialogReducer = (state: dialogsPageType = initialState, action: ActionTypeAll) => {
    switch (action.type) {
        case CHANGE_DIALOG_TEXT:
            return {
                ...state,
                newMassageText: action.newText
            }
        case ADD_DIALOG_TEXT:
            let newMessage: MessageType = {id: '6', message: action.message}
             return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMassageText: ''
            }
        default:
            return state;
    }

}

export type ChangeDialogTextType = ReturnType<typeof ChangeDialogTextAC>
export const ChangeDialogTextAC = (newText: string) => ({type: CHANGE_DIALOG_TEXT, newText} as const)

export type AddDialogTextType = ReturnType<typeof AddDialogTextAC>
export const AddDialogTextAC = (message: string) => ({type: ADD_DIALOG_TEXT, message} as const)
