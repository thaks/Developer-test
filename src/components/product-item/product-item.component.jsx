import React from 'react'
import './product-item.styles.scss'

import ProductItemImage from '../product-item-image/product-item-image.component'
import ProductItemPrice from '../product-item-price/product-item-price.component'
import ProductItemTitle from '../product-item-title/product-item-title.component'

const ProductItem = ({product}) => {    

    return <div className="product-item" onClick={() => {
    }}>
        <ProductItemImage image={product.imageUrl}/>
        <ProductItemTitle/>
        <ProductItemPrice/>
    </div>
}

export default ProductItem;


