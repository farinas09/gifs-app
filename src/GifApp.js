import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories)

    return (
        <div>
            <h2>Gif App</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map( (category, i) => <GifGrid key={category} category={category}/>) 
                }
            </ol>
        </div>
    )
}
