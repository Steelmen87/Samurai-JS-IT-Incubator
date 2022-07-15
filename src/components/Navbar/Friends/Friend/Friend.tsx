import React from 'react';
import style from './Frien.module.css'

type propsType = {
    state: {
        name: string
        avatar: string
    }

}
const Friend = (props: propsType) => {
    const {state} = props
    return (
        <div className={style.friend}>
            <img className={style.ava} src={state.avatar} alt='ava'/>
            <br/>
            {state.name}
        </div>
    )
}
export default Friend;