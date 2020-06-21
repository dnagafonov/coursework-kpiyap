import produce from "immer";
import { getConvertedList } from '../tools/get-converted-list';

const { type } = require('../actions/constants');

const account = produce((draft, action) => {
    switch (action.type) {
        case type.ADD_GOOD_TO_CART:
            draft.cart = action.cart;
            return draft;
        case type.LOG_IN:
            draft = action.account;
            return draft; 
        case type.LOG_OUT: 
            draft = { currency: "byr" };
            return draft;
        case type.UPDATE_CURRENCY_IN_CART:
            draft.cart = getConvertedList(action.list, action.currency, action.exchangeRate);
            return draft;
        case type.UPDATE_CURRENCY:
            draft.currency = action.currency;
            return draft;
        case type.DELETE_GOOD_FROM_CART:
            draft.cart = action.cart;
            return draft;
        case type.UPDATE_WITHDRAW_DATA:
            const totalPrice = action.cart.reduce((prev, cur) => prev + cur.currentPrice.price, 0);
            draft.totalPrice = totalPrice;
            return draft;
        case type.CLEAR_CART:
            draft.cart = action.cart;
            return draft;
        default:
            return draft;
    }
}, { currency: "byr" })

export default account;