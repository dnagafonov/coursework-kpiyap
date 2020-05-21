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
                ...state,
                good: action.good
            };
        case type.SET_RATE:
            return {
                ...state,
                exchangeRate: action.rate
            };
        case type.SET_LIST:
            return {
                ...state,
                list: getConvertedList(action.list, action.currency, action.exchangeRate),
                exchangeRate: action.exchangeRate
            }
        case type.GET_LIST_DATA:
            return {
                ...state,
                rawList: action.rawList
            }
        default:
            return state;
    }
}

export default goodReducer;