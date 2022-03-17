import { AddBoxOutlined, Logout, LogoutOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { logout } from '../firebase/config'
import './css/Home.css'
import BottomNav from './BottomNav'
import instagramText from '../assets/img/instagram-text.png'

function Home() {
    const [show, handleShow] = useState(false)
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
    return (
        <div>
            <div className={`Home__header ${show && "Home__headerwhite"}`}>
                    <img className='Home__headerimg' src={instagramText} alt='instagram-text'/>
                    <div className='Home__headerbtn'>
                        <AddBoxOutlined fontSize='large'/>
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
            <BottomNav/>
        </div>
    )
}

export default Home