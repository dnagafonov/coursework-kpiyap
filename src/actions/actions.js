import { getExchangeRate } from '../tools/get-exchange-rate';
import { type } from './constants';

export const switchActivePage = page => ({
    type: type.SWITCH_ACTIVE_PAGE,
    activePage: page
});

export const setGoodData = good => ({
    type: type.SET_GOOD_DATA,
    good
});

export const setRate = rate => ({
    type: type.SET_RATE,
    rate
});

export const fetchRateData = () => async dispatch => {
    return getExchangeRate().then(rate => dispatch(setRate(rate)));
}

export const setList = (list, currency) => async dispatch => {
    return getExchangeRate().then(rate => {
        dispatch({
            type: type.SET_LIST,
            list,
            currency,
            exchangeRate: rate
        })
    }).catch(e => console.error(`Faidet to set list: ${e.message}`));
}