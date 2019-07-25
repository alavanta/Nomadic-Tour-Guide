import axios from 'axios';

const url = 'http://192.168.6.163:3000';

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

export const changePassword = (token,data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return {
        type: 'CHANGE_PASSWORD',
        payload: axios.post(`${url}/tourGuide/password`,data)
    }
}


