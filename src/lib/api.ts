import axios from 'axios';

const BASE_URL = 'https://pas-backend-zhsi.onrender.com/';
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

api.defaults.withCredentials = true;

export default api;