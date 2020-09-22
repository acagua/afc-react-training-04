import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    //console.log({id, title, url})
    return (
        // classname porque class es una palabra reservada para js
        <div className='card animate__animated animate__fadeIn'> 
            <img src={url} alt={title} />
             <p>{title}</p>
        </div>
    )
}
