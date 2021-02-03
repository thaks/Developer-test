import React from 'react'
import Logo from '../logo/logo.component'
import NavBar from '../navbar/navbar.component'
import './header.styles.scss'


const Header = () => {
    return <header className="header">
        <Logo/>
        <NavBar/>
    </header>
}

export default Header;