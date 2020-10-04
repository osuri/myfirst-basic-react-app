import React from 'react';
import './searchComponent.css';
export const SearchComponent = ({placeholder,handleChange}) => {
    return(
<input 
className='search'
type='search'
placeholder={placeholder}
onChange={handleChange}
/>
    )
}




export default SearchComponent;