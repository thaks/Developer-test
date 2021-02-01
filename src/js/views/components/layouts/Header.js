import { LogoBox, NavBox, NavLink, SearchInput, Wrapper } from "..";

const Header = (className) => {

        const header = document.createElement('header')
        header.classList.add(className);

        header.append(LogoBox("//cdn.shopify.com/s/files/1/2610/4676/files/logo-png2_38c04b8f-7dc6-43bf-8115-aadaad3b6ffa_500x.png"))
        header.append(Wrapper('navigation', [
            //  child1
            NavBox([
                NavLink("Home"),
                NavLink("Men", "Men"),
                NavLink("Women", "Womens"),
                NavLink("Kids", "kids"),
                NavLink("Accessories", "accessories"),
            ]),

            // child2
            SearchInput()
        ]))
        return header;
}

export default Header;
