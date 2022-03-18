import { AccountCircle, AddBoxOutlined, HomeOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
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
            <Link to='/addform'>
                <AddBoxOutlined fontSize='large'/>
            </Link>
            <ShoppingBagOutlined fontSize='large'/>
            <Link to="/profile">
                <AccountCircle fontSize='large'/>
            </Link>
        </div>
    )
}

export default BottomNav