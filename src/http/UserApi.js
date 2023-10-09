import jwt_decode from 'jwt-decode';
import { $host } from "./host";
import axios from "axios";

function getJwtFromCookie() {
    var cookieValue = document.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('jwt='));

    if (cookieValue) {
        return cookieValue.substring(4);
    }

    return null;
}

export const registration = async (user) => {
    await axios.post('https://videoperimetr.onrender.com/userlog/registration', user);
    const jwt = getJwtFromCookie()
    return jwt_decode(jwt);
}

export const login = async (user) => {
    await axios.post('https://videoperimetr.onrender.com/userlog/login', {email: user.email, password: user.password});
    const jwt = getJwtFromCookie()
    return jwt_decode(jwt);
}