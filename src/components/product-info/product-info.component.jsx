import React from 'react'
import Button from '../button/button.component';
import ProductDescription from '../product-description/product-description';
import ProductPrice from '../product-price/product-price.component';
import ProductRelatedGrid from '../product-related-grid/product-related-grid.component';
import ProductSwatch from '../product-swatch/product-swatch.component';
import ProductTitle from '../product-title/product-title.component';
import SubTitle from '../subtitle/subtitle.component';
import './product-info.styles.scss'



const ProductInfo = ({product}) => {
    return <div className="product-info">
        <ProductTitle title={product.title}/>
        <ProductPrice price={product.price} />
        <ProductSwatch title="Size: " swatches={product.sizes} />
        <ProductSwatch title="Color: " swatches={product.colors}/>
        <Button title="Add To Cart" handleClick={() => {}}/>
        <SubTitle subtitle={"DESCRIPTION"}/>
        <ProductDescription description={product.descripton} />
        <SubTitle subtitle={"SEE MORE PRODUCTS"}/>
        <ProductRelatedGrid relatedProducts={product.related }/>
</div>
}

export default ProductInfo;