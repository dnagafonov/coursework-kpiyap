import { getConvertedList } from '../tools/get-converted-list';
import produce from "immer";

const { type } = require('../actions/constants');

const goodReducer = produce((draft, action) => {
    switch (action.type) {
        case type.SET_GOOD_DATA:
            draft.good = {
                ...action.good,
                currentPrice: action.currentPrice
            };
            return draft;
        case type.SET_RATE:
            draft.exchangeRate = action.rate;
            return draft;
        case type.SET_LIST:
            draft.list = getConvertedList(action.list, action.currency, action.exchangeRate);
            draft.exchangeRate = action.exchangeRate;
            return draft;
        case type.CLEAR_LIST:
            draft.list = null;
            return draft;
        case type.CLEAR_GOOD:
            draft.good = null;
            return draft;
        default:
            return draft;
    }
}, {
    good: null,
    currency: "byr"
})

export default goodReducer;