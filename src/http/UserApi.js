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
    const { data } = await axios.post('userlog/registration', user);
    localStorage.setItem('jwt', data.token);
    const payload = jwt_decode(data.token)

    return payload
}

export const login = async (user) => {
    // const a = await axios.post('https://videoperimetr.onrender.com/userlog/login', {email: user.email, password: user.password}, {withCredentials: true});
    const { data } = await axios.post(
        'https://videoperimetr.onrender.com/userlog/login',
        {email: user.email, password: user.password},
        {headers: {
                  Authorization: `Bearer `,
                }
        });

    localStorage.setItem('jwt', data.token);
    const payload = jwt_decode(data.token);

    return payload
}