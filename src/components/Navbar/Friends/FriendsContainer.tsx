import {RootState} from "../../../redux/redux-store";
import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state: RootState) => {
    return {
        friends: state.sidebar.friends
    }
}

export default connect(mapStateToProps)(Friends)