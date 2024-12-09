import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:302/"
})

export default api