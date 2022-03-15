import { AddBoxOutlined, Inbox, Logout, Menu } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { logout } from '../firebase/config'
import './css/HeaderNav.css'

function HeaderNav(props) {
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
        <div className={`headerNav ${show && "header__black"}`}>
            <h2 className='headerNav__username'>{props.username}</h2>
            <div className='headerNav__btn'>
                <AddBoxOutlined fontSize='large'/>
                <Logout fontSize='large' className='headerNav__menu' onClick={logout}/>
            </div>
        </div>
    )
}

export default HeaderNav