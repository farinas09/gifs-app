import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs();
        //empty dependenciesList to call getGifs once
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=RealMadrid&limit=10&api_key=JbwslOa3XV0cReKk5ipkGtC2yNUfksKU';
        const res = await fetch(url);
        const {data} = await res.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map( ({id, title}) => <li key={id}>{title}</li>) 
                }
            </ol>
        </div>
    )
}
