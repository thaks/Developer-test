
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


import { ProductCartButton, ProductColor, ProductDescription, ProductImageBox, ProductInfo, ProductSeemMoreHeading, ProductSeeMoreItem, ProductSize, Wrapper } from '../components';


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