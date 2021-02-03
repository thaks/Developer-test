import React from 'react'
import ProductRelatedItem from '../product-related-item/product-related-item.component'
import './product-related-grid.styles.scss'

const ProductRelatedGrid = ({relatedProducts}) => {

    return <div className="produt-related-grid">
        {relatedProducts && relatedProducts.map(related => {
            return <ProductRelatedItem key={related.imageUrl} image={related.imageUrl} />
        })}
    </div>
}

export default ProductRelatedGrid;


