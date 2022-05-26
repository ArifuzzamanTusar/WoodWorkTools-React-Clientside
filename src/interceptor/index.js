import axios from "axios";


const fetchApi = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://ww-tools.herokuapp.com',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    }
});




export default fetchApi;