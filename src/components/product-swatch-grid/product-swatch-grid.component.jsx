import React from 'react'
import './product-swatch-grid.styles.scss'

import ProductSwatchItem from '../product-swatch-item/product-swatch-item.component'


const ProductSwatchGrid = ({swatches, handleClick}) => {
    return <div className="product-swatch-grid">
        {swatches && swatches.map((swatch, index) => {
            return <ProductSwatchItem key={index} swatch={swatch} handleClick={handleClick}/>
        })}
    </div>
}

export default ProductSwatchGrid;