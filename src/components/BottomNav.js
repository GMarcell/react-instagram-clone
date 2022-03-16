import { AccountCircle, AddBoxOutlined, HomeOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/BottomNav.css'

function BottomNav() {
    return (
        <div className='BottomNav'>
            <Link to="/home">
                <HomeOutlined fontSize='large'/>
            </Link>
            <SearchOutlined fontSize='large'/>
            <AddBoxOutlined fontSize='large'/>
            <ShoppingBagOutlined fontSize='large'/>
            <AccountCircle fontSize='large'/>
        </div>
    )
}

export default BottomNav