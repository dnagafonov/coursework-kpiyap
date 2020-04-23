import axios from "axios";

export const getCurrentPrice = async (abbreviation, price) => {
    const json = await (await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")).data;
    console.log(json)
    const index = json.findIndex(obj => obj.Cur_Abbreviation === abbreviation.toUpperCase());
    switch (abbreviation) {
        case "rub":
            return {
                symbol: "₽",
                price: Math.round(price * json[index].Cur_OfficialRate / 100, 2)
            }            
    
        default:
            return {
                symbol: "$",
                price: Math.round(price , 2)
            };
    }
};