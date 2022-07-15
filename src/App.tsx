import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import New from "./components/Navbar/New/New";
import Music from "./components/Navbar/Music/Music";
import Settings from './components/Navbar/Settirngs/Settings';
import {StorePropsTypeMain} from "./redux/State";
import Friend from "./components/Navbar/Friends/Friends";


type AppPropsType = {
    state: StorePropsTypeMain
}

function App(props: AppPropsType) {
    let {state} = props
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>

                <div className='app_wrapper_content'>
                    {/* <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}

                    <Route path='/profile' render={() => <Profile
                        postData={state.profilePage.postData}/>}/>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogData={state.dialogsPage.dialogData}
                        messageData={state.dialogsPage.messageData}
                    />}/>



                    <Route path='/new' component={New}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

