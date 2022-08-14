import React from 'react'
import {AddDialogTextAC, ChangeDialogTextAC} from "../../redux/Dialog-Reducer";
import Dialogs from "./Dialogs";
import {RootState} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";


type PropsDialogType = {
}
const DialogsContainer = (props: PropsDialogType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state: RootState = store.getState()
                const addMessage = (message: string) => {
                     store.dispatch(AddDialogTextAC(message))

                }
                const onChangeDialog = (text: string) => {
                     store.dispatch(ChangeDialogTextAC(text))
                }
                return <Dialogs
                    changeNewText={onChangeDialog}
                    addDialogText={addMessage}
                    state={state}
                    message={state.dialogsPage.newMassageText}
                />
            }}
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;


