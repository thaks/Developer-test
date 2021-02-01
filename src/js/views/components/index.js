
// Component - Wrapper
export const Wrapper = (wrapperClassName, childrens) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add(wrapperClassName)
    childrens.map(child => {
        wrapper.append(child)
    })
    return wrapper;
}


// Header Components 
//////////////////////////////////////

// Component - LogoBox
export const LogoBox = (imageSource) => {
    const htmlString = `<img class="logobox__logo " src="${imageSource}" alt="Test Shop"/>`;
    const logobox = document.createElement('div')
    logobox.classList.add('logobox')
    logobox.classList.add('center-horizontal')
    logobox.innerHTML = htmlString;
    return logobox;
}

// Component - NavLink
export const NavLink = (linkText, linktype) => {
    const htmlString = `${linkText}`;
    const navlink = document.createElement('div')
    if(linktype) navlink.dataset.type = linktype
    navlink.classList.add('navlink')
    navlink.innerHTML = htmlString;
    return navlink;
}

// Component - NavBox
export const NavBox = (childrens) => {
    const navbox = document.createElement('nav')
    navbox.classList.add('nav')
    childrens.map(child => {
        navbox.append(child)
    })
    return navbox;
}

// Component - SearchInput
export const SearchInput = () => {
    const searchInput = document.createElement('div');
    searchInput.classList.add('search')
    
    const searchButton = document.createElement('div');
    searchButton.classList.add('search__button')

    const input = document.createElement("input");
    input.classList.add('search__input')
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search...");

    var searchIcon = document.createElement("img");
    searchIcon.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/622/622669.svg?token=exp=1612131966~hmac=1b20397265a8d6f495ea0c62bafca1d3");
    searchIcon.setAttribute("width", "17");
    searchIcon.setAttribute("height", "17");
    searchIcon.setAttribute("alt", "Search");
    searchIcon.classList.add('search__icon')

    searchButton.append(searchIcon);
    searchInput.append(input);
    searchInput.append(searchButton);
    
    return searchInput;
}