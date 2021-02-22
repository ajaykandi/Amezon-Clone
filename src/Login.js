import React from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signin = (e) => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))


    }

    const Register = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }

            })
            .catch((error => alert(error.message)))


    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={Signin}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.</p>


                <button onClick={Register}>Create Your Account</button>


            </div>



        </div>






    )
}

export default Login
