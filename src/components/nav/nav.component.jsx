import React from 'react'
import NavLink from '../navlink/navlink.component';
import './nav.styles.scss'

const Nav = () => {
    return <nav className="nav">
        <NavLink linkName="Home" />
        <NavLink linkName="Men" linkType="men" />
        <NavLink linkName="Women" linkType="women" />
        <NavLink linkName="Kids" linkType="kids" />
        <NavLink linkName="Accessories" linkType="accessories" />
    </nav>
}

export default Nav;
