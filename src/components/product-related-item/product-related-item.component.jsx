import React from 'react'

const ProductRelatedItem = ({image}) => {
    return <div className="product-related-item">
        <img src={image} alt="" className="product-related-item__image"/>
    </div>
}

export default ProductRelatedItem;