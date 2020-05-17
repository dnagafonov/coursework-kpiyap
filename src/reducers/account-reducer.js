import { getConvertedList } from '../tools/get-converted-list';

const { type } = require('../actions/constants');

const initialState = {
    username: "someuser",
    email: "someemail@mail.com",
    cart: [],
    currency: "byr"
};

const account = (state = initialState, action) => {
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
            return {}
        case type.LOG_OUT: 
            return {}
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