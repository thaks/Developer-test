
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


// 1) Initializze Layout Container Components - Header, Main, Footer
createApp();

const controlFeatured = () => {
    const featured = new Featured();
    featured.getFeaturedProducts()
}

controlFeatured()

// 2) Render Homepage
renderPage("homepage", homepageData);
// renderPage("collpage", collpageData);
// renderPage("productpage", productpageData);

// 3) Add Listeners 
addListeners()



