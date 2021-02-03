import React from 'react'
import {useHistory } from 'react-router-dom';
import './navlink.styles.scss'



const NavLink = ({linkName, linkType}) => {
    const history = useHistory()

    return (
        <div className="navlink" onClick={() => { linkType ? history.push(`/shop/collection/${linkType}`) : history.push(`/`) }} >{linkName}</div>
    )
}

export default NavLink;