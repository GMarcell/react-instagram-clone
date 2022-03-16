import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase/config';
import { Link, useNavigate } from "react-router-dom";
import './css/Register.css'
import instagramText from '../assets/img/instagram-text.png'
import { Google } from '@mui/icons-material';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
    if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/profile");
    }, [user, loading]);
    return (
        <div className="register">
            <div className="register__container">
                <img className='register__image' src={instagramText} alt='instagram-text'/>
                <input type="text" className="register__textBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="text" className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <input type="password" className="register__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <h3 className='register__or'>OR</h3>
                <button className="register__btn register__google" onClick={signInWithGoogle} >
                    <Google className='google__icon'/>
                    Register with Google
                </button>
            </div>
                <div className='register__login'>
                    Already have an account? <Link to="/" className='register__loginLink'>Login</Link>
                </div>
        </div>
    )
}

export default Register