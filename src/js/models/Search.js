import Shop from '../api/Shop'


export default class Search  {
    
    constructor(query) {
        this.q = query
    }

    async getProducts() {
        try {   
            const result = await Shop.get(`/api/v1/products/search?q=${this.q}`)
            this.result = result.data.products;
            
        }catch(err) {
            console.log(err);
        }
    }
}