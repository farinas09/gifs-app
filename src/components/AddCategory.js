import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            //Arrow function has access to current state
        setCategories( cats => [inputValue, ...cats]);
    }
    setinputValue('');
    }

    return (
            <form className="form-group" onSubmit={handleSubmit}>
            <input className="form-control"
                placeholder="Search GIFs"
                type="text"
                value= {inputValue}
                onChange={handleInputChange}
            />
            </form>
    )
}

//required function setCategories
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
