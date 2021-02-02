import { collpageData, homepageData } from "../data";
import { renderPage } from "./helpers";

export const renderWithProducResult = (products, type) => {
    const title = type;
    let newData = { title, products}
    console.log({newData})
    renderPage("collpage", newData);
}
