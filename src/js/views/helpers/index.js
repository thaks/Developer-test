
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


import { ProductCartButton, ProductColor, ProductDescription, ProductImageBox, ProductInfo, ProductSeemMoreHeading, ProductSeeMoreItem, ProductSize, Wrapper, Banner, SubTitle, HomepageProductItem , Title, CollectionPageItem} from '../components';


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
 return Wrapper('collpage', [
    Title(collpageData.title),
    CollPageGrid(collpageData.products)
 ])   
}