import React from 'react'
import './search-box.styles.scss'

const SearchBox = ({searchValue, handleChange}) => {
    return <input type="text" name="" id="" className="search-input" value={searchValue} onChange={handleChange} placeholder="SEARCH"/>
}
export default SearchBox;