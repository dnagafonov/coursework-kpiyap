import axios from 'axios';

export const getExchangeRate = async () => 
await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
.then(json => json.data).catch(e => console.error(`Fetch exchange rate error: ${e.message}`));