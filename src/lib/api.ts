import axios from 'axios';

const BASE_URL = 'https://pas-backend-zhsi.onrender.com/';
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type',
    }
});

api.defaults.withCredentials = true;

export default api;