import { HighlightOff } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/config'
import './css/Post.css'

function Post(props) {
    const deletePost = async (id) => {
        await deleteDoc(doc(db, "posts", id))
    }
    return (
        <div className='Post'>
            <div className='Post__header'>
                <div className='Post__name'>
                    <Avatar className='Post__avatar' alt={props.username} src="/static/images/avatar/1.jpg" />
                    <h4 className='Post__username'>{props.username}</h4>
                </div>
                <button className="Post__delete" onClick={() => { deletePost(props.iddoc) }}>
                    <HighlightOff fontSize='large' />
                </button>
            </div>
            {/* Post */}
            <img className='Post__image' src={props.imgUrl} alt=''/>
            {/* username + caption */}
            <h4 className='Post__text'><span>{props.username}</span>{props.caption}</h4>
        </div>
    )
}

export default Post