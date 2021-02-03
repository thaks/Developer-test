import React from 'react'
import { useHistory } from 'react-router-dom'
import './logo.styles.scss'

const Logo = () => {
    const history = useHistory()

    return <div className="logobox" onClick={() => history.push('/')}>
        <img src="//cdn.shopify.com/s/files/1/2610/4676/files/logo-png2_38c04b8f-7dc6-43bf-8115-aadaad3b6ffa_500x.png" alt="" className="logo"/>
    </div>
}

export default Logo;