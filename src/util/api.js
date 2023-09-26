import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
    }
})

export default api;