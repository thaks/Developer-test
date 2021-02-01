
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


import { ProductCartButton, ProductColor, ProductDescription, ProductImageBox, ProductInfo, ProductSeemMoreHeading, ProductSeeMoreItem, ProductSize, Wrapper, Banner, SubTitle, HomepageProductItem } from '../components';


const initRender = (childrens) => {
    const app = document.createElement('div');
    app.classList.add('app')
    elements.body.append(app);

    childrens.map(child => {
        app.append(child);
    })
}
Header

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









// const Banner = (bannerUrl) => {
//     const banner = document.createElement('div');
//     banner.classList.add('homepage__banner');
//     banner.innerHTML = `
//         <img class="homepage__banner__image" src="${bannerUrl}" alt="banner" />
//     `;
//     return banner;
// }

// const SubTitle = (className,subtitle) => {
//     const h3 = document.createElement('h3')
//     h3.classList.add('subtitle')
//     className && h3.classList.add(className)
//     h3.innerHTML = subtitle;
//     return h3;
// }

// const HomepageProductItem = (prod) => {
//     const item = document.createElement('div');
//     item.classList.add('homepage__featured__item')
//     item.dataset.id = '01';
//     item.classList.add('product-item-button')

//     const htmlString = `
//         <div class="homepage__featured__item__imagebox product_item_button">
//             <img class="homepage__featured__item__image" src="${prod.imageUrl}" alt="" />
//         </div>

//         <div class="homepage__featured__item__titlebox">
//             <div class="homepage__featured__item__title">${prod.productName}</div>
//             <div class="homepage__featured__item__price">
//                 ${prod.productPrice}
//             </div>
//         <div>
//     `;
//     item.innerHTML = htmlString;
//     return item;
// }


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