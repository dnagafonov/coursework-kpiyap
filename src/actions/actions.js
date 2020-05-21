import { getExchangeRate } from '../tools/get-exchange-rate';
import { type } from './constants';
import { postRegistration } from '../tools/authorization';
import React from 'react'
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

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

export const getListData = url => async dispatch => {
    return await Axios.get(url).then(res => {
        dispatch({
            type: type.GET_LIST_DATA,
            rawList: res.data
        });
        return res.data;
    }).catch(e => console.error(`Failed to get list data: ${e.message}`));
}

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

export const postNewAccount = (url, account) => async dispatch => {
    return await postRegistration(url, account).then(res => {
        if(res.status === 302 ){
            dispatch(logIn(res.account));
            return <Redirect to="/account" />
        }
    }).catch(e => console.error(e))
}

export const logOut = () => ({
    type: type.LOG_OUT
});

export const logIn = (account) => ({
    type: type.LOG_IN,
    account
})