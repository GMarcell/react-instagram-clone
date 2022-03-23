import { GridOnOutlined, VideoLibraryOutlined } from '@mui/icons-material'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/config'
import './css/PostsGroup.css'

function PostsGroup() {
    const [posts, setPosts] = useState([])
    const dbPostRef = collection(db, "posts")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(dbPostRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [posts])

    const navigate = useNavigate()
    const changeRoute = () => {
        let path = '/home'
        navigate(path)
    }
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
                    {
                        posts.map(post => (
                            <img className='PostsGroup__grid-item' src={post.imgUrl} alt='post' onClick={changeRoute}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default PostsGroup