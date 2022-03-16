import { LogoutOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { logout } from '../firebase/config'
import './css/Home.css'

function Home() {
    return (
        <div>
            <IconButton onClick={logout}>
                <LogoutOutlined/>
            </IconButton>
        </div>
    )
}

export default Home