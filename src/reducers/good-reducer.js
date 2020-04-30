import { setRate } from '../actions/actions';
import { getCurrentPrice } from '../tools/get-current-price';
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
        case type.SET_LIST:
            const list = action.list.map(el => {
                const currentPrice = getCurrentPrice(action.currency, el.price, action.exchangeRate);
                return {
                    ...el,
                    currentPrice
                }
            });
            return {
                list,
                exchangeRate: action.exchangeRate
            }
        default:
            return state;
    }
}

export default goodReducer;