import axios from "axios";

export default axios.create({ 
    baseURL: 'https://developer-test-server.herokuapp.com',
})