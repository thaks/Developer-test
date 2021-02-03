import React from 'react'

import './homepage.styles.scss';

import Banner from '../../components/banner/banner.component';
import ProductGrid from '../../components/product-grid/product-grid.component';
import SubTitle from '../../components/subtitle/subtitle.component';
import { useFeaturedProducts } from '../../hooks/useFeaturedProducts';



const HomePage = () => {
    const {loading, error, data} = useFeaturedProducts()
    
    if(loading || !data ) return <h2>Loading...</h2>
    if(error) return <h2>Error!</h2>

    return <div className="homepage">
        <Banner/>
        <SubTitle/>
        <ProductGrid products={data.data}/>            
    </div>
}

export default HomePage;
