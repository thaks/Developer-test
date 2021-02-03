import React from 'react'

import './homepage.styles.scss';

import Banner from '../../components/banner/banner.component';
import ProductGrid from '../../components/product-grid/product-grid.component';
import SubTitle from '../../components/subtitle/subtitle.component';
import { useFeaturedProducts } from '../../hooks/useFeaturedProducts';
import LoaderPage from '../loaderpage/loaderpage.component';



const HomePage = () => {
    const {loading, error, data} = useFeaturedProducts()
    
    if(loading || !data ) return <LoaderPage/>
    if(error) return <h2>Error!</h2>

    return <div className="homepage">
        <Banner/>
        <SubTitle subtitle="FEATURED PRODUCTS"/>
        <ProductGrid products={data.data}/>            
    </div>
}

export default HomePage;
