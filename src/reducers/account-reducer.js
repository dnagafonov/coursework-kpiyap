import { getConvertedList } from '../tools/get-converted-list';

const { type } = require('../actions/constants');

const init = {
    username: "fdfd",
    currency: "byr",
    cart: [
        {
            "id": 3,
            "name": "Hoods",
            "price": 1600,
            "type": "spares",
            currentPrice: {
                price: 123123,
                symbol: ""
            }
        },
        {
            "id": 4,
            "name": "Tail light",
            "price": 1000,
            "type": "spares",
            currentPrice: {
                price: 123123,
                symbol: ""
            }
        },
        {
            "id": 5,
            "name": "Seat",
            "price": 2000,
            "type": "spares",
            currentPrice: {
                price: 123123,
                symbol: ""
            }
        },
    ]
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