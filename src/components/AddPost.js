import { Button,  TextField } from '@mui/material';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { auth, db, logout, storage } from '../firebase/config';
import BottomNav from './BottomNav';
import './css/AddPost.css'
import instagramText from '../assets/img/instagram-text.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AddBoxOutlined, Logout } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddPost() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [show, handleShow] = useState(false)

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

    const handleChangePreview = (e) => {
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
            setSelectedFile(e.target.files[0])
        }
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return Navigate("/");
        fetchUserName();
    }, [user, loading]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
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
                        username: name
                    })
                })
                Navigate("/home")
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
                    {/* <input className='AddPost__inputfile' id="file-ip-1" type='file' onChange={handleChangePreview} /> */}
                    <Button variant='contained' component="label">
                        Upload Image
                        <input type="file" id="file-ip-1" onChange={handleChangePreview} hidden />
                    </Button>
                    <div className='AddPost__preview'>
                        <img id="file-ip-1-preview" className='AddPost__imgpreview'/>
                    </div>
                    <TextField fullWidth margin='dense' multiline onChange={(e) => setCaption(e.target.value)}></TextField>
                    <Button className='AddPost__submitbtn' variant='contained' type='submit'>UPLOAD</Button>
                </form>
            </div>
            <BottomNav/>
        </div>
    )
}

export default AddPost