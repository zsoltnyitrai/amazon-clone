import React, {useState} from 'react'
import loginLogo from '../assets/loginLogo.png'
import {Link, useHistory} from 'react-router-dom'
import '../styles/Login.css'
import { auth } from '../firebase'

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const login=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //logged in
                history.push('/')
            })
            .catch((e)=> alert(e.message))
    }
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            //created new user
            history.push('/')

        })
        .catch((e)=>alert(e.message))
    }

    return (
        
            <div className="login">
                <Link to='/'>
                    <img className='login-logo' src={loginLogo} alt="" />
                </Link>
                <div className="login-container">
                    <div className="login-container-sign-in">Sign In</div>
                    <form action="">
                        <div className="login-container-email">E-mail</div>
                        <input value={email} onChange={event=>setEmail(event.target.value)} type="email" name=""/>
                        <div className="login-container-email">Password</div>
                        <input value={password} onChange={event=>setPassword(event.target.value)} type="password" name=""/>
                        <button onClick={login}  className='login-container-sign-in-button'>Sign In</button>
                    </form>
                    <div className='login-agree'>By signing in you agree to Amazons conditions</div>
                    <button onClick={register} className='login-container-register-in-button'>Create your Amazon account</button>
                </div>
            </div>
        
    )
}

export default Login
