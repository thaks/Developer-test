import { collpageData, homepageData } from "../data";
import { renderPage } from "./helpers";

export const renderWithProducResult = (products) => {
    const title = "Default Title"
    let newData = { title, products}
    console.log({newData})
    renderPage("collpage", newData);
}
