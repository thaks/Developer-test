
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


import { ProductCartButton, ProductColor, ProductDescription, ProductImageBox, ProductInfo, ProductSeemMoreHeading, ProductSeeMoreItem, ProductSize, Wrapper, Banner, SubTitle, HomepageProductItem , Title, CollectionPageItem, ShimmerBox} from '../components';
import { collpageData, homepageData, productpageData } from '../../data';


const initRender = (childrens) => {
    const app = document.createElement('div');
    app.classList.add('app')
    elements.body.append(app);

    childrens.map(child => {
        app.append(child);
    })
}

export const createApp = () => {
    initRender([Header("header"), Main("main"), Footer("footer")])
}



const CreateRelatedProductSection = (related) => {
    const items = related.map(item => {
        return ProductSeeMoreItem(item.imageUrl)
    })

    return Wrapper('ppage-info-main__seemore', [
        ...items
    ])
}

export const CreateProductPage = (details) => {
    return Wrapper('ppage-info-main', [
        ProductImageBox(details.imageUrl),

        Wrapper('ppage-info-main__details', [
            ProductInfo(details.title, details.price),
            ProductSize(details.sizes),
            ProductColor(details.colors),
            ProductCartButton(),
            ProductDescription(details.descripton),

            Wrapper('ppage-info-main__seemore-wrapper', [
                ProductSeemMoreHeading("See more products"),
                CreateRelatedProductSection(details.related)
            ])
        ])

    ])
}







const HompageFeaturedGrid = (products) => {
    const items = products.map(prod => {
        return HomepageProductItem(prod);
    });
    
    return Wrapper("homepage__featured__grid", [
        ...items
    ])
}

export const CreateHomePage = (data) => {
    return Wrapper("homepage", [
        Banner(data.bannerUrl),

        Wrapper('homepage__featured', [
            SubTitle("homepage__featured__title", data.homepageSectionTitle),
            HompageFeaturedGrid(data.products)
        ])
    ])
}






const CollPageGrid = (products) => {
    const items = products.map(prod => {
        return CollectionPageItem(prod)
    })
    return Wrapper('collpage__grid', [
      ...items
    ])
}

export const CreateCollectionPage = (collpageData) => {
 console.log({collpageData})
 return Wrapper('collpage', [
    Title(collpageData.title),
    CollPageGrid(collpageData.products)
 ])   
}



// Function responsible for rendering the page in the DOM
// params - (homepage | collpage | productpage) 

export const renderPage = (resource, staticData) => {
    if(resource === "homepage") {
        document.querySelector('body').querySelector('.main').innerHTML = ``;
        document.querySelector('body').querySelector('.main').append(
            CreateHomePage(staticData)
            )
        }else if(resource === "collpage") {  
            document.querySelector('body').querySelector('.main').innerHTML = ``;
            document.querySelector('body').querySelector('.main').append(
                CreateCollectionPage(staticData)
            )
        }else if(resource === "productpage") {
            document.querySelector('body').querySelector('.main').innerHTML = ``;
            document.querySelector('body').querySelector('.main').append(
                CreateProductPage(staticData)
            )
        }else if(resource === "shimmer") {
            document.querySelector('body').querySelector('.main').innerHTML = ``;
            document.querySelector('body').querySelector('.main').append(
                CreateShimmerPage()
            )
        }
}

export const CreateShimmerPage = () => {
    return ShimmerBox()
}