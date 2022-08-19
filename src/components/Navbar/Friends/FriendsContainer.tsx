import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Friends from "./Friends";
import {initialStateType} from "../../../redux/Sidebar-Reducer";


type mapStateToPropsType = {
    sidebar: initialStateType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

export default connect(mapStateToProps)(Friends)