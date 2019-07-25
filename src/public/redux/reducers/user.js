const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFinish: false
};

export default user = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFinish: false
            };
        case 'FETCH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFinish: false
            };
        case 'FETCH_DATA_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFinish: true,
                data: action.payload.data.data
            };
        default:
            return state
    }
}