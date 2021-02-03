import React from 'react'
import './search-button.styles.scss'

import { BiSearch } from "react-icons/bi";

const SearchButton = ({handleSearch}) => {
    return <div className="search-button" onClick={handleSearch}>
        <BiSearch size={23}/>
    </div>        
}
export default SearchButton