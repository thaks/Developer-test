import Shop from '../api/Shop'


export default class Product  {
    constructor(id) {
        this.id = id;
    }

    async getProduct() {
        try {   
            const result = await Shop.get(`/api/v1/product/${this.id}`)
            this.product = result.data.product;
            console.log(result.data)
            
        }catch(err) {
            console.log(err);
        }
    }
}