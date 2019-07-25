import axios from 'axios';

const url = require('./url').url;

export const fetchUser = ( data) => {
    
    return {
        type: 'FETCH_USER',
        payload: axios.post(`${url}/tourGuide/login`, data)
    }
}

export const fetchDataUser = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return {
        type: 'FETCH_DATA_USER',
        payload: axios.get(`${url}/tourGuide/getById`)
    }
}


