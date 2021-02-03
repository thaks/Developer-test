import axios from 'axios';
import { useQuery } from 'react-query';

async function fetchProducts() {
    try {
        const result = await axios.get(`https://developer-test-server.herokuapp.com/api/v1/products/featured`)
        console.log(result.data)
        return result.data;

    }
    catch(err) {
        console.log(err.message)
    }
}

export const useFeaturedProducts = () => {
    const {loading, error, data} = useQuery("",fetchProducts)
    return {loading, error, data}
}