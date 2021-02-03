import React from 'react'
import './product-item-price.styles.scss'

const ProductItemPrice = ({price}) => {
    return <p className="product-item__price">{price}</p>
}

export default ProductItemPrice;