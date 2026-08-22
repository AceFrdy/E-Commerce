import axios from 'axios'

const Api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASEURL || 'https://erp.digitalindustryagency.com/api',

    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
});

export default Api;