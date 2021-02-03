import React from 'react'
import './navbar.styles.scss';

import Nav from "../nav/nav.component"
import Search from "../search/search.component"


const  NavBar = () => {
    return <div className="navbar">
        <Nav/>
        <Search/>
    </div>
}

export default NavBar;