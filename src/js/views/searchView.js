import { renderPage } from "./helpers";

export const getInput = () => document.querySelector('body').querySelector('.search__input').value
export const clearInput = () => document.querySelector('body').querySelector('.search__input').value = ""

export const renderSearchResult = (products) => {
    const title = "Search Result";
    let newData = { title, products}
    renderPage("collpage", newData);
}
