import React from 'react'
import ProductImage from '../../components/product-image/product-image.component';
import ProductInfo from '../../components/product-info/product-info.component';
import { useProductRequest } from '../../hooks/useProductRequest';

import './productpage.styles.scss';


const ProductPage = () => {
    const {loading, error, data} = useProductRequest()
    
    if(loading || !data ) return <h2>Loading...</h2>
    if(error) return <h2>Error!</h2>

    return data && <div className="productpage">
        <ProductImage imageUrl={data.product.imageUrl} />
        <ProductInfo product={data.product} />
    </div>
}

export default ProductPage;

