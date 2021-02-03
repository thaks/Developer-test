import React from 'react'
import './product-swatch-info.styles.scss'

import ProductSwatchShow from '../product-swatch-show/product-swatch-show.component'
import ProductSwatchTitle from '../product-swatch-title/product-swatch-title.compoent'

const ProductSwatchInfo = ({title,value}) => {
    return <div className="product-swatch-info">
        <ProductSwatchTitle title={`${title}`}/>
        <ProductSwatchShow value={value} />
    </div>
}

export default ProductSwatchInfo;