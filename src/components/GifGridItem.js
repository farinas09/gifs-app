import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(id, title, url)
    return (
        <div className="card animate__fadeIn">
            <img className="card-img-top" src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
