import Shop from '../api/Shop'

export default class Collection {
    constructor(type) {
        this.type = type;
    } 

    async getProductsOfType() {
        try {
            const result = await Shop.get(`/api/v1/products/collection?type=${this.type}`)
            this.products = result.data.products;
            console.log("Collection???", this.products)
        }
        catch(err) {
            console.log(err.message)
        }
    }
} 