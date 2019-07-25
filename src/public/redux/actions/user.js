import axios from 'axios';

const url = 'http://192.168.6.163:3000';

export const fetchUser = (data) => {
    return {
        
        type: 'FETCH_USER',
        payload: axios.post(`${url}/tourGuide/login`, data)
    }
}

