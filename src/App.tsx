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
import {RootStoreType, StoreType} from "./redux/State";


type AppPropsType = {
    store: StoreType
    /*state: RootStoreType
    updateNewPostText: (newText: string) => void
    addPost(postMessage: string): void
    changeNewText(changeText: string): void
    addDialogText(changeText: string): void*/
}

const App: React.FC<AppPropsType> = (props) => {
    let state = props.store.getState()
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>

            <div className='app_wrapper_content'>
                {/* <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                <Route path='/profile' render={() => <Profile
                    dispatch={props.store.dispatch.bind(props.store)}
                    newPostText={state.profilePage.newPostText}
                    //addPost={props.store.addPost.bind(props.store)}
                    postData={state.profilePage.postData}/>}/>

                <Route path='/dialogs' render={() => <Dialogs
                    //addDialogText={props.store.addDialogText.bind(props.store)}
                    //changeNewText={props.store.changeDialogText.bind(props.store)}
                    dispatch={props.store.dispatch.bind(props.store)}
                    dialogData={state.dialogsPage.dialogData}
                    messageData={state.dialogsPage.messageData}
                    message={state.dialogsPage.newMassageText}
                />}/>


                <Route path='/new' component={New}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;

