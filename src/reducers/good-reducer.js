import { getConvertedList } from '../tools/get-converted-list';
const { type } = require('../actions/constants');

const initialState = {
    good: null,
    currency: "byr"
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
        case type.SET_LIST:
            return {
                list: getConvertedList(action.list, action.currency, action.exchangeRate),
                exchangeRate: action.exchangeRate
            }
        case type.UPDATE_CURRENCY_IN_CART:
            return {
                list: getConvertedList(action.list, action.currency, action.exchangeRate),
                exchangeRate: action.exchangeRate
            }
        case type.UPDATE_CURRENCY:
            return {
                currency: action.currency
            }
        default:
            return state;
    }
}

export default goodReducer;