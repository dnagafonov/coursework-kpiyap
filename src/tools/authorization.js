import axios from "axios"

export const postRegistration = async (url, data) => await axios.post(url, data).then(res => res.data)
.catch(e => console.error(`Auth error: ${e.message}`));

export const postLogin = async (url, data) => await axios.post(url, data).then(res => res.data)
.catch(e => console.error(`Auth error: ${e.message}`));