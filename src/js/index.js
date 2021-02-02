
// Pollyfill Import
import "core-js/stable";
import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";
import "regenerator-runtime/runtime"

// Sass Import
import '../scss/main.scss'

// Components Import
import { elements } from "./views/base";


import { createApp, renderPage } from "./views/helpers";
import { productpageData, collpageData } from "./data";

import Featured from "./models/Featured";
import Product from "./models/Product";
import Collection from "./models/Collection";

import * as homeView from './views/featuredView';
import * as productPageView from './views/productView';
import * as collectionView from './views/collectionView';


// GLOBAL STATE 
const state = {

}

// Controller - Featured 
const controlFeatured = async () => {
    
    // 1. New featured object and add to the state 
    state.featured = new Featured()
    
    // 2. Preare UI for the result 
    
    // 3. Search for Featured products
    await state.featured.getFeaturedProducts()
    
    // 4. Render the result on the UI
    homeView.renderHomepaeWithFeaturedResult(state.featured.products);
}

const controlProduct = async (id) => {
    // 1. New Product object and add to the state.
    state.product = new Product(id)

    // 2. Preare UI for the result 
    
    // 3. Search for Single Product by ID
    await state.product.getProduct()

    // 4. Render the result on the UI
    productPageView.renderWithProducResult(state.product.product);
}

const controlCollection = async (type) => {
    // 1. New Product object and add to the state.
    state.collection = new Collection(type)

    // 2. Preare UI for the result 
    
    // 3. Search for Single Product by ID
    await state.collection.getProductsOfType()

    // 4. Render the result on the UI
    collectionView.renderWithProducResult(state.collection.products);
}

// 1) Initializze Layout Container Components - Header, Main, Footer
createApp();
controlFeatured()

// 2) Add Listeners 

// Header Event Listeners
// 1. Logobox 
document.body.querySelector('.logobox').addEventListener('click', () => {
    controlFeatured()
})

// 2. nav links
const navLinks = document.body.querySelectorAll('.navlink')
console.log(navLinks)

navLinks.forEach(item => {
    item.addEventListener('click', e => {
        const type = e.target.dataset.type;
        if(type) {
            controlCollection(type)
        }else {
            controlFeatured()
            
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

    const productId = closestItem.dataset.id;
    if(!productId) {
        renderPage("productpage", productpageData)
        return;
    }
    controlProduct(productId)
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
