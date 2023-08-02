import API_REQUEST from "./utils/axios.util"

const baseUrl = `${process.env.BACKEND_URL}/v1/user`

const USER_SIGNUP = async (payload:any) => {
    const url = `${baseUrl}/signup`
    console.log({url, payload})
    const response = await API_REQUEST(url, 'post', payload, null);

    return response
}

const USER_LOGIN = async (payload:any) => {
    const url = `${baseUrl}/login`
    const response = await API_REQUEST(url, 'post', payload, null);

    return response
}

export {
    USER_SIGNUP,
    USER_LOGIN
}