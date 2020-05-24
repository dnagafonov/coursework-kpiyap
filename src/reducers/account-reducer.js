import { getConvertedList } from '../tools/get-converted-list';

const { type } = require('../actions/constants');

const init = {
    username: "someUser",
    currency: "byr",
    cart: []
}

const account = (state = init, action) => {
    switch (action.type) {
        case type.ADD_GOOD_TO_CART:
            return {
                ...state,
                cart: [
                    action.good,
                    ...state.cart,
                ]
            }
        case type.LOG_IN:
            return {
                ...action.account
            }
        case type.LOG_OUT: 
            return {
                currency: "byr"
            }
        case type.UPDATE_CURRENCY_IN_CART:
            return {
                ...state,
                cart: getConvertedList(action.list, action.currency, action.exchangeRate),
            };
        case type.UPDATE_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }
        default:
            return state;
    }
}

export default account;