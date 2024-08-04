import React from 'react'

import './Login.scss'

const Login: React.FC = () => {
    return (
        <div className='container'>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
            <button onClick={() => console.log("aaaaa")}>Login</button>
        </div>
    )
}

export default Login