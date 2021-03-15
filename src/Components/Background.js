import React from 'react'
import './Background.css'

function Background() {
    return (
        <>
        <div className="backbox">
            <img src={`${process.env.PUBLIC_URL}/futurebg.png`} />
        </div>
        </>
    )
}

export default Background
