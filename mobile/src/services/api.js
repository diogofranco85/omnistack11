import axios from 'axios';

const api = axios.create({
    baseURL:'http://172.16.26.100:3333',
})

export default api;