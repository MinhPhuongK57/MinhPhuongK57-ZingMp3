import actionTypes from 'store/actions/actionTypes';

const initState = {
    homeData: [],
    test: 'Hello',
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;

        default:
            return state || initState;
    }
};

export default appReducer;
