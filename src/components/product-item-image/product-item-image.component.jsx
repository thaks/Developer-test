import React from 'react'
import './product-item-image.styles.scss'

const ProductItemImage = ({image}) => {
    return <div className="product-item__imagebox">
        <img src={image} alt="" className="product-item__image"/>
    </div>
}

export default ProductItemImage;


