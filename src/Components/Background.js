import React ,{ useState , useEffect }from 'react'
import './Background.css'

function Background() {
    
    return (
        <>
        <div className="backbox">
           <img src={`${process.env.PUBLIC_URL}/futurebg.jpg`} alt="" /> 
        </div>

        </>
    )
}

export default Background
