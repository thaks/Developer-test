
// Pollyfill Import
import "core-js/stable";
import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";
import "regenerator-runtime/runtime"

// Sass Import
import '../scss/main.scss'

// Components Import
import { elements } from "./views/base";


import { createApp, CreateProductPage, CreateHomePage, renderPage, addListeners } from "./views/helpers";
import { homepageData, productpageData, collpageData } from "./data";
import Featured from "./models/Featured";
import * as homeView from './views/featuredView';


// GLOBAL STATE 
const state = {

}



const controlFeatured = async () => {
    
    // 1. New featured object and add to the state 
    state.featured = new Featured()
    
    // 2. Preare UI for the result 
    
    // 3. Search for Featured products
    await state.featured.getFeaturedProducts()
    
    // 4. Render the result on the UI
    homeView.renderHomepaeWithFeaturedResult(state.featured.products);
}


// 1) Initializze Layout Container Components - Header, Main, Footer
createApp();
controlFeatured()

// 2) Render Homepage
// renderPage("homepage", homepageData);
// renderPage("collpage", collpageData);
// renderPage("productpage", productpageData);

// 3) Add Listeners 
addListeners()



