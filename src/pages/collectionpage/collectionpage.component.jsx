import React from 'react'
import ProductGrid from '../../components/product-grid/product-grid.component'
import Title from '../../components/title/title.component'
import { useCollectionRequest } from '../../hooks/useCollectionRequest'

import './collectionpage.styles.scss'



const CollectionPage = () => {
    const {loading, error, data} = useCollectionRequest();
    

    if(loading || !data ) return <h2>Loading...</h2>
    if(error) return <h2>Error!</h2>

    return <div className="collectionpage">
        <Title/>
        <ProductGrid products={data.products} />
    </div>
}

export default CollectionPage;


