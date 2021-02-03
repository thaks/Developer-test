import React from 'react'
import './product-description.styles.scss'


const ProductDescription = ({description}) => {
    return <p className="product-description">
        {description}
    </p>
}

export default ProductDescription;