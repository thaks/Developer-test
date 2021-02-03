import axios from 'axios'
import { useQuery } from 'react-query'
import {useParams } from 'react-router-dom'

// Async fetch for collection page data using collectionType
async function fetchProducts(collectionType) {
    try {
        const result = await axios.get(`https://developer-test-server.herokuapp.com/api/v1/products/collection?type=${collectionType}`)
        return result.data;
    }
    catch(err) {
        console.log(err.message)
    }
}

// Custom hook for loading, error state
export const useCollectionRequest = () => {
    // getting collection type from url using router hook
    const {collectionType} = useParams()

    // getting collection page data 
    const {loading, error, data} = useQuery([collectionType], fetchProducts)

    // return states
    return {loading, error, data}
}