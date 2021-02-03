import React from 'react'
import ProductItem from '../product-item/product-item.component'
import './product-grid.styles.scss'

const ProductGrid = ({products}) => {


    return <div className="product-grid">
        {
            products &&
            products.map(prod => {
                return <ProductItem key={prod.id} product={prod}/>
            })
        }

    </div>
}
export default ProductGrid;