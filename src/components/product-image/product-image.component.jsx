import React from 'react'
import './product-image.styles.scss'

const ProductImage = ({imageUrl}) => {
    return <div className="product-image">
        <img src={imageUrl} alt="" className="product-image__img"/>
    </div>
}

export default ProductImage;