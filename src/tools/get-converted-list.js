import { getCurrentPrice } from "./get-current-price";

export const getConvertedList = (list, currency, exchangeRate) => {
    return list.map(el => {
        const currentPrice = getCurrentPrice(currency, el.price, exchangeRate);
        return {
            ...el,
            currentPrice
        }
    });
}