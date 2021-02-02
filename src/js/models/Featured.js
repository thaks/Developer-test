import Shop from '../api/Shop'

export default class Featured {
    constructor() {

    }

    async getFeaturedProducts() {
        try {   
            const result = await Shop.get('/')
            this.products = result.data.data;

            console.log("Running from Featured....")
            console.log(this.products)
        }catch(err) {
            console.log(err);
        }
    }
}