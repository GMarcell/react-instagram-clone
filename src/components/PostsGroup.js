import { GridOnOutlined, VideoLibraryOutlined } from '@mui/icons-material'
import React from 'react'
import './css/PostsGroup.css'

function PostsGroup() {
    return (
        <div>
            <div className='PostsGroup__header'>
                <div className='PostsGroup__image'>
                    <GridOnOutlined/>
                </div>
                <div className='PostsGroup__video'>
                    <VideoLibraryOutlined/>
                </div>
            </div>
            <div className='PostsGroup__container'>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
                <div className='PostsGroup__grid-item'></div>
            </div>
        </div>
    )
}

export default PostsGroup