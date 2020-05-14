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
    return await getExchangeRate().then(rate => {
        dispatch({
            type: type.SET_LIST,
            list,
            currency,
            exchangeRate: rate
        })
    }).catch(e => console.error(`Failed to set list: ${e.message}`));
}

export const updateCurrencyInCart = (list, currency) => async dispatch => {
    return await getExchangeRate().then(rate => {
        dispatch({
            type: type.SET_RATE,
            rate
        });
        return rate;
    }).then(rate => {
        dispatch({
            type: type.UPDATE_CURRENCY_IN_CART,
            list,
            currency,
            exchangeRate: rate
        })
    }).catch(e => console.error(`Failed to update currency in cart: ${e.message}`));
}

export const updateCurrency = currency => ({
    type: type.UPDATE_CURRENCY,
    currency
});

export const addGoodToCart = good => ({
    type: type.ADD_GOOD_TO_CART,
    good
});

export const logOut = () => ({
    type: type.LOG_OUT
});

export const logIn = (login, password) => async dispatch => {
    
}