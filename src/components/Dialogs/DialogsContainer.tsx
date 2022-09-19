import React from 'react'
import {AddDialogTextAC, ChangeDialogTextAC, initialStateType} from "../../redux/Dialog-Reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: initialStateType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
type mapDispatchToPropsType = {
    changeNewText: (text: string) => void
    addDialogText: (message: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        changeNewText: (text: string) => {
            dispatch(ChangeDialogTextAC(text))
        },
        addDialogText: (message: string) => {
            dispatch(AddDialogTextAC(message))
        }
    }
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));


