import { setRate } from '../actions/actions';
const { type } = require('../actions/constants');

const initialState = {
    good: null
};

const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_GOOD_DATA:
            return {
                good: action.good
            };
        case type.SET_RATE:
            return {
                exchangeRate: action.rate
            };
        case type.FETCH_RATE_DATA:
            return {
                fetched: action.rate
            }
        default:
            return state;
    }
}

export default goodReducer;