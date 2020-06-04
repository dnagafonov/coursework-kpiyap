import { getExchangeRate } from '../tools/get-exchange-rate';
import { type } from './constants';
import { postRegistration } from '../tools/authorization';
import { apiPath, accountsPath } from '../tools/config';
import Axios from 'axios';
import { getCurrentPrice } from '../tools/get-current-price';
import { errorToast, infoToast } from '../tools/toasts';
import { toast } from 'react-toastify';

export const setRate = rate => ({
    type: type.SET_RATE,
    rate
});

export const fetchGoodData = () => ({
    type: type.FETCH_GOOD_DATA
});

export const fetchExistAccount = () => ({
    type: type.FETCH_EXIST_ACCOUNT
});

export const clearList = () => ({
    type: type.CLEAR_LIST
});


export const logOut = () => ({
    type: type.LOG_OUT
});

export const logIn = (account) => ({
    type: type.LOG_IN,
    account
});

export const redirect = path => ({
    type: type.REDIRECT,
    path
});

export const openModal = child => ({
    type: type.OPEN_MODAL,
    child
});

export const closeModal = () => ({
    type: type.CLOSE_MODAL
})

export const fetchListData = (url, currency) => async dispatch => {
    return await Axios.get(url).then(res => {
        dispatch({
            type: type.FETCH_LIST_DATA
        });
        return res.data
    }).then(list => dispatch(setList(list, currency)))
        .catch(e => errorToast(`Failed to get list data: ${e.message}`));
}

export const fetchRateData = () => async dispatch => {
    return getExchangeRate().then(rate => dispatch(setRate(rate))).catch(e => errorToast(`Failed to fetch rate data: ${e.message}`));
}

export const setGoodData = (goodType, id, rate, currency) => async dispatch => {
    dispatch(fetchGoodData());
    return await Axios.get(`${apiPath}/${goodType}/${id}`)
        .then(good => {
            const currentPrice = getCurrentPrice(currency, good.data.price, rate);
            dispatch({
                type: type.SET_GOOD_DATA,
                good: good.data,
                currentPrice
            })
        }).catch(e => errorToast(`Failled to set good data: ${e.message}`))
}

export const setList = (list, currency) => async dispatch => {
    return await getExchangeRate().then(rate => {
        dispatch({
            type: type.SET_LIST,
            list,
            currency,
            exchangeRate: rate
        })
    }).catch(e => errorToast(`Failed to set list: ${e.message}`));
}

export const updateCurrencyInCart = (list, currency) => async dispatch => {
    return await getExchangeRate().then(rate => {
        dispatch(setRate(rate));
        return rate;
    }).then(rate => dispatch({
        type: type.UPDATE_CURRENCY_IN_CART,
        list,
        currency,
        exchangeRate: rate
    })).catch(e => errorToast(`Failed to update currency in cart: ${e.message}`));
}

export const updateCurrency = currency => ({
    type: type.UPDATE_CURRENCY,
    currency
});

export const addGoodToCart = (accountId, good) => async dispatch => {
    const toastId = infoToast("Please wait...");
    dispatch({ type: type.POST_GOOD_TO_CART });
    return Axios.post(`${accountsPath}/cart/add`, {
        id: accountId,
        service: good
    }).then(res => {
        if (res.data.status === 201) {
            toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Added!", autoClose: 5000 });
            dispatch({
                type: type.ADD_GOOD_TO_CART,
                cart: res.data.cart
            });
        }
    }).catch(e => toast.update(toastId, { type: toast.TYPE.ERROR, render: `Failed to add product to cart: ${e.message}`, autoClose: 5000 }))
};

export const deleteGoodFromCart = (accountId, good) => async dispatch => {
    const toastId = infoToast("Please wait...");
    dispatch({ type: type.POST_GOOD_TO_CART });
    return Axios.post(`${accountsPath}/cart/delete`, {
        id: accountId,
        service: good
    }).then(res => {
        if (res.data.status === 200) {
            toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Deleted!", autoClose: 5000 });
            dispatch({
                type: type.DELETE_GOOD_FROM_CART,
                cart: res.data.cart
            });
        }
    }).catch(e => toast.update(toastId, { type: toast.TYPE.ERROR, render: `Failed to delete product from cart: ${e.message}`, autoClose: 5000 }))
};


export const setExistAccount = (username, password) => async dispatch => {
    const toastId = infoToast("Please wait...");
    dispatch(fetchExistAccount());
    Axios.post(`${accountsPath}/login`, {
        username,
        password
    }).then(res => {
        if (res.data.status === 200) {
            toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "You are loggined in!", autoClose: 5000 });
            dispatch(logIn(res.data.account))
        }
        if (res.data.status === 404)
            toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Oops, some data is incorrect!", autoClose: 5000 });
    }).catch(e => toast.update(toastId, { type: toast.TYPE.ERROR, render: `Failed to login: ${e.message}`, autoClose: 5000 }))
}

export const postNewAccount = (url, account) => async dispatch => {
    const toastId = infoToast("Please wait...");
    return await postRegistration(url, account).then(res => {
        if (res.status === 201) {
            toast.update(toastId, { type: toast.TYPE.SUCCESS, render: "Your account was succesfully registred!", autoClose: 5000 });
            dispatch(logIn(res.account));
        }
    }).catch(e => errorToast(`Failed to create neew account: ${e.message}`))
}

export const updateWithdrawData = (cart) => ({
    type: type.UPDATE_WITHDRAW_DATA,
    cart
});