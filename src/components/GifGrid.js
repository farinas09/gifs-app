import React from 'react'
import { PropTypes } from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__fadeIn">{category}</h3>
        { loading && <div class="alert alert-primary" role="alert">Loading</div> }
        <div className="card-grid album py-5 bg-light animate__fadeIn">
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}