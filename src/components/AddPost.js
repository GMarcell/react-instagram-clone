import { Button, Input, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { db, logout, storage } from '../firebase/config';
import BottomNav from './BottomNav';
import './css/AddPost.css'
import instagramText from '../assets/img/instagram-text.png'
import { Link } from 'react-router-dom';
import { AddBoxOutlined, Logout } from '@mui/icons-material';

function AddPost() {
    const [username, setUsername] = useState("");
    const [caption, setCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [show, handleShow] = useState(false)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    const handleUpload = (e) => {
        e.preventDefault()
        const storageRef = ref(storage, `/images/${selectedFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, selectedFile)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.TotalBytes) * 100
                )
                setProgress(prog)
            },
            (error) => {
                console.log(error);
                alert(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    addDoc(collection(db, "posts"), {
                        caption: caption,
                        imgUrl: url,
                        username: username
                    })
                })
            }
        )
    }


    return (
        <div className='AddPost'>
            <div className={`Home__header ${show && "Home__headerwhite"}`}>
                <img className='Home__headerimg' src={instagramText} alt='instagram-text'/>
                <div className='Home__headerbtn'>
                    <Link to="/addform">
                        <AddBoxOutlined fontSize='large'/>
                    </Link>
                    <Logout fontSize='large' className='Home__headerlogout' onClick={logout}/>
                    </div>
                </div>
            <div className='AddPost__container'>
                <form onSubmit={handleUpload}>
                    <Input className='AddPost__inputuser' variant='filled' placeholder='Username' type='text' onChange={(e) => setUsername(e.target.value)}/>
                    <TextField multiline onChange={(e) => setCaption(e.target.value)}></TextField>
                    <input className='AddPost__inputfile' type='file' onChange={handleChange} />
                    <Button className='AddPost__submitbtn' variant='contained' type='submit'>UPLOAD</Button>
                </form>
            </div>
            <BottomNav/>
        </div>
    )
}

export default AddPost