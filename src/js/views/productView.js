import { productpageData } from "../data";
import { renderPage } from "./helpers";

export const renderWithProducResult = (fetchedProduct) => {
    console.log({fetchedProduct})
    renderPage("productpage", fetchedProduct);
}
