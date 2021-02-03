import React, {useEffect, useState} from 'react'
import ProductSwatchGrid from '../product-swatch-grid/product-swatch-grid.component'
import ProductSwatchInfo from '../product-swatch-info/product-swatch-info.component'
import './product-swatch.styles.scss'

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

