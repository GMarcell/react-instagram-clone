import React, { useEffect, useState } from 'react'

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
            <h1>{props.username}</h1>
        </div>
    )
}

export default HeaderNav