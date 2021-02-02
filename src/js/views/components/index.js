
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


// Product Page Components 
//////////////////////////////////////

// Component - ProductImageBox
export const ProductImageBox = (imageSource) => {
    const htmlString = `<img class="ppage-info-main__image " src="${imageSource}" alt="T Shop"/>`;
    const productImageBox = document.createElement('div')
    productImageBox.classList.add('ppage-info-main__imagebox')
    productImageBox.innerHTML = htmlString;
    return productImageBox;
}

// Component - ProductInfo
export const ProductInfo = (title, price) => {
    const productInfo = document.createElement('div');
    productInfo.classList.add('ppage-info-main__contentbox')
    const htmlString = `
        <div class="ppage-info-main__title">${title}</div>
        <div class="ppage-info-main__price">${price}</div>
    `
    productInfo.innerHTML = htmlString;
    return productInfo;
}

// Component - ProductSize
export const ProductSize = (sizes) => {
    const productSize = document.createElement('div');
    productSize.classList.add('ppage-info-main__size')
    const htmlString = `
        <div class="ppage-info-main__size__top">
            <div class="ppage-info-main__size__title">Size :</div>
            <div class="ppage-info-main__size__selectedshow">${sizes[0].sizeName}</div>
        </div>

        <div class="ppage-info-main__size__bottom">
            ${
                sizes.map(item => {
                    return `<div class="ppage-info-main__size__item" data-value="${item.sizeName}">${item.sizeName}</div>`
                })
            }
        </div>
    `;
    productSize.innerHTML=htmlString;
    return productSize;
}

// Component - ProductColor
export const ProductColor = (colors) => {
    const productColor = document.createElement('div');
    productColor.classList.add('ppage-info-main__color')
    const htmlString = `
        <div class="ppage-info-main__color__top">
            <div class="ppage-info-main__color__title">Color :</div>
            <div class="ppage-info-main__color__selectedshow">Yellow</div>
        </div>

        <div class="ppage-info-main__color__bottom">
            ${colors.map(item => {
                return `<div class="ppage-info-main__color__item" style="background-color: ${item.colorCode}" data-value="${item.colorName}"></div>`
            })}
        </div>
    `;
    productColor.innerHTML=htmlString;
    return productColor;
}

// Component - ProductCartButton 
export const ProductCartButton = () => {
    const button = document.createElement('div')
    button.classList.add('ppage-info-main__cartbutton');
    button.innerHTML = `ADD TO CART`
    return button;
}

// Component - ProductSeeMoreItem
export const ProductSeeMoreItem = (imageSource) => {
    const htmlString = `<img class="ppage-info-main__seemore__image" src="${imageSource}" alt="T Shop"/>`;
    const item = document.createElement('div');
    item.classList.add('ppage-info-main__seemore__item');
    item.innerHTML = htmlString;
    return item
}

// Component - ProductSeemMoreHeading
export const ProductSeemMoreHeading = (title) => {
    const heading =  document.createElement('h3')
    heading.classList.add('ppage-info-main__seemore-wrapper__heading')
    heading.innerHTML = title;
    return heading;
}

// Component - Description
export const ProductDescription = (description) => {
    const desc = document.createElement('div')
    desc.classList.add('ppage-info-main__desc')
    const title = document.createElement('h3')
    title.classList.add('ppage-info-main__desc__title')
    title.innerHTML = `Description`;
    const content = document.createElement('div');
    content.classList.add('ppage-info-main__desc__content')
    content.innerHTML = description;
    desc.append(title)
    desc.append(content);
    return desc;
}



// Home Page Components 
//////////////////////////////////////

export const Banner = (bannerUrl) => {
    const banner = document.createElement('div');
    banner.classList.add('homepage__banner');
    banner.innerHTML = `
        <img class="homepage__banner__image" src="${bannerUrl}" alt="banner" />
    `;
    return banner;
}

export const SubTitle = (className,subtitle) => {
    const h3 = document.createElement('h3')
    h3.classList.add('subtitle')
    className && h3.classList.add(className)
    h3.innerHTML = subtitle;
    return h3;
}

export const HomepageProductItem = (prod) => {
    const item = document.createElement('div');
    item.classList.add('homepage__featured__item')
    item.dataset.id = prod.id;
    item.classList.add('product-item-button')

    const htmlString = `
        <div class="homepage__featured__item__imagebox product_item_button">
            <img class="homepage__featured__item__image" src="${prod.imageUrl}" alt="" />
        </div>

        <div class="homepage__featured__item__titlebox">
            <div class="homepage__featured__item__title">${prod.title}</div>
            <div class="homepage__featured__item__price">
                ${prod.price}
            </div>
        <div>
    `;
    item.innerHTML = htmlString;
    return item;
}


// Collection Page Components 
//////////////////////////////////////

export const Title = (titleData) => {
    const title = document.createElement('h2');
    title.classList.add('collpage__title');
    title.innerHTML = titleData;
    return title;
}


export const CollectionPageItem = (prod) => {
    const item = document.createElement('div');
    item.classList.add('collpage__item')
    item.classList.add('product-item-button')

    const htmlString = `
    <div class="collpage__item__imagebox">
        <img class="collpage__item__image" src="${prod.imageUrl}" alt="" />
    </div>

    <div class="collpage__item__titlebox">
        <div class="collpage__item__title">${prod.productName}</div>
        <div class="collpage__item__price">
            ${prod.productPrice}
        </div>
    <div>
    `;

    item.innerHTML = htmlString;
    return item;
}


