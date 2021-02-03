import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

import './search.styles.scss';

import SearchBox from '../search-box/search-box.component';
import SearchButton from '../search-button/search-button.component';


const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const history = useHistory()
    
    const handleChange = e => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        if(searchValue) {
            history.push(`/shop/collection/${searchValue}`, {search: true, searchTerm: searchValue})
            setSearchValue("")
        }
    }

    return <div className="search">
        <form action="" className="search-form">
            <SearchBox searchValue={searchValue} handleChange={handleChange} />
            <SearchButton handleSearch={handleSearch}/>
        </form>
    </div>
}

export default Search;


