
// Pollyfill Import
import "core-js/stable";
import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";
import "regenerator-runtime/runtime"

// Sass Import
import '../scss/main.scss'

// Components Import
import { LogoBox, NavBox, NavLink, Wrapper, SearchInput } from "./views/components";
import { elements } from "./views/base";

// Testing Component Mount in body
elements.body.append(
    LogoBox("//cdn.shopify.com/s/files/1/2610/4676/files/logo-png2_38c04b8f-7dc6-43bf-8115-aadaad3b6ffa_500x@2x.png?v=1606180239 1x, //cdn.shopify.com/s/files/1/2610/4676/files/logo-png2_38c04b8f-7dc6-43bf-8115-aadaad3b6ffa.png?v=1606180239 1.1x")
)

// Testing Wrapper and NavBox
elements.body.append(
    Wrapper("navigation", [
        NavBox([
            NavLink("Home"),
            NavLink("Men", "Mens")
        ])
    ]),

    SearchInput()
)


