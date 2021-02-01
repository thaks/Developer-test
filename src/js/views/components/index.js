
// Component - Wrapper
export const Wrapper = (wrapperClassName, childrens) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add(wrapperClassName)
    childrens.map(child => {
        wrapper.append(child)
    })
    return wrapper;
}


// Header Components //////////////////

// Component - LogoBox
export const LogoBox = (imageSource) => {
    const htmlString = `<img class="logobox__logo " src="${imageSource}" alt="Test Shop"/>`;
    const logobox = document.createElement('div')
    logobox.classList.add('logobox')
    logobox.classList.add('center-horizontal')
    logobox.innerHTML = htmlString;
    return logobox;
}
