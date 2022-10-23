import React, {useEffect} from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import New from "./components/Navbar/New/New";
import Music from "./components/Navbar/Music/Music";
import Settings from './components/Navbar/Settirngs/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-Reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


const App = () => {
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp())
    }, [initialized])

    {
        if (!initialized) {
            return <Preloader/>
        }

        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app_wrapper_content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    {/* <Route path='/profile' render={() => <ProfileContainer/>}/>*/}
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/new' component={New}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        );
    }
}

export default App;

