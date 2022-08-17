import React from 'react'
import {AddDialogTextAC, ChangeDialogTextAC} from "../../redux/Dialog-Reducer";
import Dialogs from "./Dialogs";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewText: (text: string) => {
            dispatch(ChangeDialogTextAC(text))
        },
        addDialogText: (message: string) => {
            dispatch(AddDialogTextAC(message))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;


