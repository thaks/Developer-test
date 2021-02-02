import { homepageData } from "../data";
import { renderPage } from "./helpers"

export const renderHomepaeWithFeaturedResult = (products) => {
    //static data
    const title = "Featured Products";
    const bannerUrl = "https://visionnext.ae/wp-content/uploads/2019/03/dubai-sliding-banner.jpg";

    // create new object using API call featured products and static banner url and title
    const newhomepageData = { bannerUrl: bannerUrl, homepageSectionTitle: title, products } 

    // Render homepage with newly creatd homapge data using helper renderPage
    renderPage("homepage", newhomepageData);
}
