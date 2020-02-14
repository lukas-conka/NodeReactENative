import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.0.103:3333'
    baseURL: 'http://10.6.11.74:3333'

})

export default api;