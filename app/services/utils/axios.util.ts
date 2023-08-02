import axios from "axios";

const API_REQUEST = async (url: any, method: any, data: any = null, authString: any = null) => {
    const response: any = await axios({
        method,
        url,
        data,
        headers: { 'Authorization': `Bearer ${authString}` },
        timeout: 10000
    })
        .then((res) => res.data)
        .catch((error) => {
            console.log({error})
            const errMessage = error.message;
            // throw CatchError(errMessage);
        })

    return response;
}

export default API_REQUEST;