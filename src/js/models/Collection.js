export default class Collection {
    constructor(type) {
        this.type = type;
    } 

    async getProductsOfType() {
        try {
            const result = await Shop.get(`/api/v1/products/collection?type=${this.type}`)
            console.log("Collection Result", result)
        }
        catch(err) {

        }
    }
} 