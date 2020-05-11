import axios from 'axios';

export const getExchangeRate = async () => 
await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
.then(json => {
    console.log(json);
    return json.data
}).catch(e => console.error(`Error: ${e.message}`));