import React from 'react'
import './button.styles.scss'

const Button = ({title, handleClick}) => {
    return <div className="button" onClick={handleClick}>
        {title}
    </div>
}   

export default Button;