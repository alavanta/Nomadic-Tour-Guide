import {AsyncStorage} from 'react-native';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFinish: false
};

export default user = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_USER_PENDING':
        case 'FETCH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFinish: false
            };
            
        case 'FETCH_DATA_USER_REJECTED':
        case 'FETCH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFinish: false
            };
            
        case 'FETCH_USER_FULFILLED':

            AsyncStorage.setItem('token', action.payload.data.token);
            AsyncStorage.setItem('user', action.payload.data.data[0].guide_phone);
            AsyncStorage.setItem('name', action.payload.data.data[0].guide_name);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFinish: true,
                data: action.payload.data.data
            };
            
        case 'FETCH_DATA_USER_FULFILLED':
            
            return {
                ...state,
                isLoading:false,
                isError:false,
                isFinish:true,
                data: action.payload.data.data
            }
        default:
            return state
    }
}