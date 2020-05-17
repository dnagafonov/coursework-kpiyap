import axios from "axios"

export const authorization = async (url, data) => {
    await axios.post(url, data).then(res => {
        console.log(res);
        if(res.data.status === "success"){
            return res.data;
        }
        return 0;
    }).catch(e => console.error(`Auth error: ${e.message}`));
}