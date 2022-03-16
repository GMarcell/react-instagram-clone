import { AddBoxOutlined, Logout } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { logout } from '../firebase/config'
import './css/HeaderTitle.css'

function HeaderTitle(props) {
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
        <div className={`HeaderTitle ${show && "HeaderTitle__white"}`}>
            <h2 className='HeaderTitle__username'>{props.username}</h2>
            <div className='HeaderTitle__btn'>
                <AddBoxOutlined fontSize='large'/>
                <Logout fontSize='large' className='HeaderTitle__menu' onClick={logout}/>
            </div>
        </div>
    )
}

export default HeaderTitle