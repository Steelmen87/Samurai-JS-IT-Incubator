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
import {RootState} from "./redux/redux-store";


type AppPropsType = {
    state: RootState
    store: any
    dispatch: ({type}: { type: string }) => void
}

const App: React.FC<AppPropsType> = (props) => {
    let state = props.state
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar friends={state.sidebar.friends}/>

            <div className='app_wrapper_content'>
                <Route path='/profile' render={() => <Profile
                    dispatch={props.store.dispatch}
                    newPostText={state.profilePage.newPostText}
                    postData={state.profilePage.postData}/>}/>

                <Route path='/dialogs' render={() => <Dialogs
                    dispatch={props.store.dispatch}
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

