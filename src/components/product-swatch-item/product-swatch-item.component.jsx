import React, {useState} from 'react'
import './product-swatch-item.styles.scss'

const ProductSwatchItem = ({swatch, handleClick}) => {

    if(swatch.sizeName) {
        return <div className="product-swatch-item" onClick={() => {
            handleClick(swatch.sizeName)
        }}>{swatch.sizeName}</div>
    }else {
        return <div style={{backgroundColor: swatch.colorCode }} className="product-swatch-item" onClick={() => handleClick(swatch.colorName)}></div>
    }
}
export default ProductSwatchItem;