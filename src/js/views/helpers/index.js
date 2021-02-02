
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


import { ProductCartButton, ProductColor, ProductDescription, ProductImageBox, ProductInfo, ProductSeemMoreHeading, ProductSeeMoreItem, ProductSize, Wrapper, Banner, SubTitle, HomepageProductItem , Title, CollectionPageItem} from '../components';
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
    }
}




export const addListeners = () => {

    // Header Event Listeners
    // 1. Logobox 
    document.body.querySelector('.logobox').addEventListener('click', () => {
        renderPage("homepage", homepageData)
    })

    // 2. nav links
    const navLinks = document.body.querySelectorAll('.navlink')
    console.log(navLinks)

    navLinks.forEach(item => {
        item.addEventListener('click', e => {
            const title = e.target.dataset.type;
            if(title) {
                const newCollData = {...collpageData, title};
                renderPage("collpage", newCollData);
            }else {
                renderPage("homepage", homepageData);
                
            }
        })
    })

    // 3. search
    document.body.querySelector('.search__button').addEventListener('click', () => {
        const value = document.body.querySelector('.search__input').value;
        const searchData = {...collpageData, title: ("Search Result!" + " " + value)}
        renderPage("collpage", searchData)
    })

    // 4. Product Item
    window.addEventListener('click', async e => {
        const closestItem = e.target.closest('.product-item-button');
        if(!closestItem) {
            return;
        }
        renderPage("productpage", productpageData)
    })

    // 5. Product Size Varaint
    window.addEventListener('click', e => {
        const closestItem = e.target.closest('.ppage-info-main__size__item');
        if(!closestItem) {
            return;
        }

        const value = closestItem.dataset.value;
        if(!value) return

        const sizeResult = document.body.querySelector('.ppage-info-main__size__selectedshow');
        const allSizesButtons = document.body.querySelectorAll('.ppage-info-main__size__item');
        
        allSizesButtons.forEach(item => {
            item.classList.remove('selected')
        })

        closestItem.classList.add('selected')
        sizeResult.innerHTML = value;
        
        console.log({allSizesButtons})
        console.log({sizeResult})
    })
    
    // 
    
    // 5. Product Color Varaint
    window.addEventListener('click', e => {
        const closestItem = e.target.closest('.ppage-info-main__color__item');
        if(!closestItem) {
            return;
        }

        const value = closestItem.dataset.value;
        if(!value) return

        const colorReslut = document.body.querySelector('.ppage-info-main__color__selectedshow');
        const allColorButtons = document.body.querySelectorAll('.ppage-info-main__color__item');
        
        allColorButtons.forEach(item => {
            item.classList.remove('selected')
        })

        closestItem.classList.add('selected')
        colorReslut.innerHTML = value;
    })
    
    // 5. Product Color Varaint;
    // ppage-info-main__color__item
    // ppage-info-main__color__selectedshow
}