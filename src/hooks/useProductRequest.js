import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

async function fetchProducts(productId) {
    const id = productId.queryKey[0];
    // console.log(id);

    try {
        const result = await axios.get(`https://developer-test-server.herokuapp.com/api/v1/product/${id}`)
        return result.data;
    }
    catch(err) {
        console.log(err.message)
    }
}

export const useProductRequest = () => {
    const {productId} = useParams();
    const {loading, error, data} = useQuery(productId,fetchProducts)

    return {
        loading, error, data,
    }
}