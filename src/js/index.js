
// Pollyfill Import
import "core-js/stable";
import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";
import "regenerator-runtime/runtime"

// Sass Import
import '../scss/main.scss'

// Components Import
import { elements } from "./views/base";


import { createApp, CreateProductPage, CreateHomePage } from "./views/helpers";
import { homepageData, productpageData } from "./data";


// 1) Initializze Layout Container Components - Header, Main, Footer
createApp();


document.querySelector('body').append(
    CreateHomePage(homepageData)
)



