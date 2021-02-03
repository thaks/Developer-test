import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'

import Banner from '../../components/banner/banner.component';
import ProductGrid from '../../components/product-grid/product-grid.component';
import SubTitle from '../../components/subtitle/subtitle.component';

import './homepage.styles.scss';



async function fetchProducts() {
    try {
        const result = await axios.get(`https://developer-test-server.herokuapp.com/api/v1/products/featured`)
        return result.data;
    }
    catch(err) {
        console.log(err.message)
    }
}


const HomePage = () => {
    const {loading, error, data} = useQuery("",fetchProducts)
    
    if(loading || !data ) return <h2>Loading...</h2>
    if(error) return <h2>Error!</h2>

    return <div className="homepage">

        <Banner/>
        <SubTitle/>
        <ProductGrid products={data.products}/>            
    </div>
}

export default HomePage;
