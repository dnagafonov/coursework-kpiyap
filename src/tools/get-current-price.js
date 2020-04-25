import axios from 'axios';

export const getCurrentPrice = async (abbreviation, price) => {
    return await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
        .then(json => {
            const index = json.data.findIndex(obj => obj.Cur_Abbreviation === abbreviation.toUpperCase());
            switch (abbreviation) {
                case "rub":
                    return {
                        symbol: "₽",
                        price: (price / json.data[index].Cur_OfficialRate * 100).toFixed(2)
                    }

                default:
                    return {
                        symbol: "$",
                        price: (price / json.data[index].Cur_OfficialRate).toFixed(2)
                    };
            }
        })
        .catch(e => console.error(`Error: ${e.message}`));
};