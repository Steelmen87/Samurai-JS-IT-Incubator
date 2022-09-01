import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import New from "./components/Navbar/New/New";
import Music from "./components/Navbar/Music/Music";
import Settings from './components/Navbar/Settirngs/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app_wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app_wrapper_content'>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/new' component={New}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;

