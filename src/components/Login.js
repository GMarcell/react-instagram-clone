import React, { useEffect, useState } from 'react'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css'
import instagramText from '../assets/img/instagram-text.png'
import { Google } from '@mui/icons-material';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/profile");
    }, [user, loading]);
    return (
        <div className='login'>
            <div className='login__container'>
                <img className='instagram__text' src={instagramText} alt='instagram-text'/>
                <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {/* <div className='forget'>
                    <Link to="/reset">Forgot Password</Link>
                </div> */}
                <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)} >
                    Login
                </button>
                <h3 className='login__or'>OR</h3>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    <Google className='google__icon'/>
                    Login with Google
                </button>
            </div>
                <div className='login__register'>
                    Don't have an account? <Link className='login__registerLink' to="/register">Sign Up</Link>
                </div>
        </div>
    )
}

export default Login