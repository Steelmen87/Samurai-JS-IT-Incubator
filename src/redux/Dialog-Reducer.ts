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
type dialogsPageType = {
    messageData: Array<MessageType>
    dialogData: Array<DialogType>
    newMassageText: string
}

export const dialogReducer = (state: dialogsPageType, action: ActionTypeAll) => {
    switch (action.type) {
        case CHANGE_DIALOG_TEXT:
            state.newMassageText = action.newText;
            return state
        case ADD_DIALOG_TEXT:
            let newMessage: MessageType = {id: '5', message: action.message,}
            state.messageData.push(newMessage)
            state.newMassageText = ''
            return state
        default:
            return state;
    }

}

export type ChangeDialogTextType = ReturnType<typeof ChangeDialogTextAC>
export const ChangeDialogTextAC = (newText: string) => ({type: CHANGE_DIALOG_TEXT, newText} as const)

export type AddDialogTextType = ReturnType<typeof AddDialogTextAC>
export const AddDialogTextAC = (message: string) => ({type: ADD_DIALOG_TEXT, message} as const)
