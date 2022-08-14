import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import New from "./components/Navbar/New/New";
import Music from "./components/Navbar/Music/Music";
import Settings from './components/Navbar/Settirngs/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/new' component={New}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;

