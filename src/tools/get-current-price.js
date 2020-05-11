import { currencyConvert } from './currency-convert';

export const getCurrentPrice = (currency, price, exchangeRates) => {
    const index = exchangeRates.findIndex(obj => obj.Cur_Abbreviation === currency.toUpperCase());
    switch (currency) {
        case "rub":
            const rub_rate = exchangeRates[index].Cur_OfficialRate;
            const rub_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "₽",
                price: currencyConvert(price, rub_rate, rub_scale)
            }
        case "Br":
            return {
                symbol: "Br",
                price
            }

        default:
            const usd_rate = exchangeRates[index].Cur_OfficialRate;
            const usd_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "$",
                price: currencyConvert(price, usd_rate, usd_scale)
            };
    }
}