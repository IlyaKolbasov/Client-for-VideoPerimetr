import axios from 'axios';

const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
});



const $authHost = axios.create({
    withCredentials: true,
    baseURL:process.env.REACT_APP_API_URL,
});
const authInterceptor = config => {
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}