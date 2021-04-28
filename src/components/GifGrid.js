import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__fadeIn">{category}</h3>
        { loading && <p>Loading</p> }
        <div className="card-grid animate__fadeIn">
                {
                    images.map( (img) => (
                    <GifGridItem
                        key={img.id}
                        {...img} />
                        )) 
                }
        </div>
        </>
    )
}
