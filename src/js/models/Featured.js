import Shop from '../api/Shop'

export default class Featured {
    constructor() {

    }

    async getFeaturedProducts() {
        try {   
            const result = await Shop.get('/')
            this.products = result.data.data;
            
        }catch(err) {
            console.log(err);
        }
    }
}