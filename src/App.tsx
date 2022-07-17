import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import New from "./components/Navbar/New/New";
import Music from "./components/Navbar/Music/Music";
import Settings from './components/Navbar/Settirngs/Settings';
import {StorePropsTypeMain} from "./redux/State";


type AppPropsType = {
    state: StorePropsTypeMain
    addPost(postMessage:string):void
}

function App(props: AppPropsType) {
    let {state,addPost} = props
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>

            <div className='app_wrapper_content'>
                {/* <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                <Route path='/profile' render={() => <Profile
                    addPost={addPost}
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
    );
}

export default App;

