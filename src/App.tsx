import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://cs13.pikabu.ru/avatars/3066/x3066923-1218757612.png ' alt=''/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Message</a></div>
                <div><a>New</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://gidfon.com/prev/8919.jpg' alt=''/>
                </div>
                <div>Ava + description</div>
                <div>My post
                    <div>
                        New Post
                    </div>
                    <div>Post1</div>
                    <div>Post1</div>
                    <div>Post1</div>
                </div>
            </div>
        </div>
    );
}

export default App;

