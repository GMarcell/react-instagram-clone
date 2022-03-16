import { AccountCircle, AddBoxOutlined, HomeOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import React from 'react'
import './css/BottomNav.css'

function BottomNav() {
    return (
        <div className='BottomNav'>
            <HomeOutlined fontSize='large'/>
            <SearchOutlined fontSize='large'/>
            <AddBoxOutlined fontSize='large'/>
            <ShoppingBagOutlined fontSize='large'/>
            <AccountCircle fontSize='large'/>
        </div>
    )
}

export default BottomNav