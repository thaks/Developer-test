import axios from 'axios';
import { useQuery } from 'react-query';

// Async fetch for homepage products
async function fetchProducts() {
    try {
        const result = await axios.get(`https://developer-test-server.herokuapp.com/api/v1/products/featured`)
        return result.data;

    }
    catch(err) {
        console.log(err.message)
    }
}

// custom hook to fetch hompage data
export const useFeaturedProducts = () => {
    // loading and error state for hompage products
    const {loading, error, data} = useQuery("",fetchProducts)
    return {loading, error, data}
}