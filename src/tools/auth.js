import axios from "axios"

export const auth = async (url, login, password) => {
    await axios.post(url, {
        login,
        password
    }).then(res => {
        if(res.data.status === "success"){
            return res.data;
        }
        return 0;
    }).catch(e => console.error(`Auth error: ${e.message}`));
}