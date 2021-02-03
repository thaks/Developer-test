import React, {useState, useEffect} from 'react'
import Banner from '../../components/banner/banner.component';
import ProductGrid from '../../components/product-grid/product-grid.component';
import SubTitle from '../../components/subtitle/subtitle.component';

import './homepage.styles.scss';



const HomePage = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData([{
            "id": 10001,
            "imageUrl": "https://cdn.shopify.com/s/files/1/2610/4676/products/SNC20669copy.jpg?v=1608552522",
            "title": "Sketchers Men's Scrub Set",
            "price": "AED 350",
            "sizes": [
                {sizeName: "XS"},
                {sizeName: "SM"},
                {sizeName: "MD"},
                {sizeName: "LG"},
                {sizeName: "XXL"},
            ],
            "colors": [
                { colorName: "Red", colorCode: "Red",},
                { colorName: "Blue", colorCode: "Blue",},
                { colorName: "Yellow", colorCode: "Yellow",},
            ],
            "descripton": `
                4001 Fatima Scrub Top features a v-neck and long sleeves. These sleeves cover the arms completely, 
                providing modesty, protects from fluid contact and covers tattoos. The sleeves have a knit cuff and
                    the shirt is fitted with princess seams and...`,
            "related": [
                {imageUrl: "https://cdn.shopify.com/s/files/1/2610/4676/products/SNC20670copy.jpg?v=1608552522",},
                {imageUrl: "https://cdn.shopify.com/s/files/1/2610/4676/products/SNC20674copy.jpg?v=1608552522"},
                {imageUrl: "https://cdn.shopify.com/s/files/1/2610/4676/products/SNC20675copy.jpg?v=1608552522"},
                {imageUrl: "https://cdn.shopify.com/s/files/1/2610/4676/products/SNC20613copy.jpg?v=1608552522"}
            ]
        }])
    }, [data])
    

    return <div className="homepage">
        <Banner/>
        <SubTitle/>
        <ProductGrid products={data}/>            
    </div>
}

export default HomePage;
