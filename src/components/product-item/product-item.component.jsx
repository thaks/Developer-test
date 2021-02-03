import React from 'react'
import './product-item.styles.scss'

import ProductItemImage from '../product-item-image/product-item-image.component'
import ProductItemPrice from '../product-item-price/product-item-price.component'
import ProductItemTitle from '../product-item-title/product-item-title.component'
import { useHistory } from 'react-router-dom'

const ProductItem = ({product}) => {  
    const history = useHistory()  

    return <div className="product-item" onClick={() => {
        history.push(`/shop/products/${product.id}`, {product})
    }}>
        <ProductItemImage image={product.imageUrl}/>
        <ProductItemTitle title={product.title}/>
        <ProductItemPrice price={product.price}/>
    </div>
}

export default ProductItem;


