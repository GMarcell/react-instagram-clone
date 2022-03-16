import { GridOn, VideoLibrary, VideoLibraryOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../firebase/config';
import './css/Profile.css'
import HeaderNav from './HeaderNav';
import PostsGroup from './PostsGroup';

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <div className='Profile'>
            <div className='Profile__summary'>
                <HeaderNav username={name}/>
                <div className='Profile__Details'>
                        <Avatar className='Profile__avatar' src="/static/images/avatar/1.jp"/>
                    <div className='Profile__number'>
                        <div className='Profile__sum'>
                            <h4>00</h4>
                            <h4>Post</h4>
                        </div>
                        <div className='Profile__sum'>
                            <h4>00</h4>
                            <h4>Follower</h4>
                        </div>
                        <div className='Profile__sum'>
                            <h4>00</h4>
                            <h4>Following</h4>
                        </div>
                    </div>
                </div>
                <div className='Profile__name'>
                    <h4>{name}</h4>
                </div>
                <button className='Profile__edit'>
                    Edit Profile
                </button>
                <PostsGroup/>
            </div>
        </div>
    )
}

export default Profile