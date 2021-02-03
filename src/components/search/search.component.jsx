import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './search.styles.scss';


const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const history = useHistory()
    

    const handleSubmit = e => {
        e.preventDefault();
        if(searchValue) {
            history.push(`/shop/collection/${searchValue}`, {search: true, searchTerm: searchValue})
            setSearchValue("")
        }
    }

    const handleChange = e => {
        setSearchValue(e.target.value);
    }


    return <div className="search">
        <form action="" className="search-form" onSubmit={handleSubmit}>
            <input type="text" name="" id="" className="search-input" value={searchValue} onChange={handleChange} placeholder="SEARCH"/>
            <input className="search-button" type="submit" value="S"/>
        </form>
    </div>
}

export default Search;