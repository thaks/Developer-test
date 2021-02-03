import React, {useEffect, useState} from 'react'
import ProductSwatchItem from '../product-swatch-item/product-swatch-item.component'
import ProductSwatchShow from '../product-swatch-show/product-swatch-show.component'
import ProductSwatchTitle from '../product-swatch-title/product-swatch-title.compoent'
import './product-swatch.styles.scss'

const ProductSwatchInfo = ({title,value}) => {
    return <div className="product-swatch-info">
        <ProductSwatchTitle title="Size :"/>
        <ProductSwatchShow value={value} />
    </div>
}

const ProductSwatchGrid = ({swatches, handleClick}) => {
    return <div className="product-swatch-grid">
        {swatches && swatches.map((swatch, index) => {
            return <ProductSwatchItem key={index} swatch={swatch} handleClick={handleClick}/>
        })}
    </div>
}

const ProductSwatch = ({title,swatches}) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        if(swatches) {
            if(swatches[0].hasOwnProperty('sizeName')) {
                setValue(swatches[0].sizeName)
            }else{
                setValue(swatches[0].colorCode)
            }
        }
    }, [swatches])

    const handleClick = v => setValue(v)

    return <div className="product-swatch">
        <ProductSwatchInfo title={title} value={value} />
        <ProductSwatchGrid swatches={swatches} handleClick={handleClick} />
    </div>
}

export default ProductSwatch;

