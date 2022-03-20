import { AddBoxOutlined, Logout } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db, logout } from '../firebase/config'
import './css/Home.css'
import BottomNav from './BottomNav'
import instagramText from '../assets/img/instagram-text.png'
import { collection, getDocs } from 'firebase/firestore'
import Post from './Post'
import { Link } from 'react-router-dom'

function Home() {
    const [show, handleShow] = useState(false)
    const [posts, setPosts] = useState([])
    const dbPostRef = collection(db, "posts")
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

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(dbPostRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [posts])

    return (
        <div>
            <div className={`Home__header ${show && "Home__headerwhite"}`}>
                    <img className='Home__headerimg' src={instagramText} alt='instagram-text'/>
                    <div className='Home__headerbtn'>
                        <Link to="/addform">
                            <AddBoxOutlined fontSize='large'/>
                        </Link>
                        <Logout fontSize='large' className='Home__headerlogout' onClick={logout}/>
                    </div>
                </div>
                    <div className='Home__stories'>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp"/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='G'/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='J'/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='F'/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='Y'/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='B'/>
                        </div>
                        <div className='Home__story'>
                            <Avatar className='Home__storyavatar' src="/static/images/avatar/1.jp" alt='H'/>
                        </div>
                    </div>
                    <div className='Home__Postcontainer'>
                        {
                            posts.map(post => (
                                <Post iddoc={post.id} username={post.username} caption={post.caption} imgUrl={post.imgUrl}/>
                            ))
                        }
                    </div>
            <BottomNav/>
        </div>
    )
}

export default Home