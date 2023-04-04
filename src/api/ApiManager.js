import axios from "axios";

const ApiManager = axios.create({
    baseURL:"https://dummyjson.com/users",
    responseType: 'json',
    withCredentials:true,
})

export default ApiManager;