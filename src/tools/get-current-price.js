import { currencyConvert } from './currency-convert';

export const getCurrentPrice = (currency, price, exchangeRates) => {
    const index = exchangeRates.findIndex(obj => obj.Cur_Abbreviation === currency.toUpperCase());
    switch (currency) {
        case "rub":
            const rub_rate = exchangeRates[index].Cur_OfficialRate;
            const rub_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "₽",
                price: +currencyConvert(price, rub_rate, rub_scale)
            }

        case "byr":
            return {
                symbol: "Br",
                price
            }

        case "eur":
            const eur_rate = exchangeRates[index].Cur_OfficialRate;
            const eur_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "€",
                price: +currencyConvert(price, eur_rate, eur_scale)
            }

        case "cny":
            const cny_rate = exchangeRates[index].Cur_OfficialRate;
            const cny_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "¥",
                price: +currencyConvert(price, cny_rate, cny_scale)
            }

        default:
            const usd_rate = exchangeRates[index].Cur_OfficialRate;
            const usd_scale = exchangeRates[index].Cur_Scale;
            return {
                symbol: "$",
                price: +currencyConvert(price, usd_rate, usd_scale)
            };
    }
}