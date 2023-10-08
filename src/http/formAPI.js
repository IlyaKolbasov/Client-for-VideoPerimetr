import { $authHost } from "./host";
import axios from "axios";

export const createRecord = async (info) => {
    const { data } = await axios.post('https://videoperimetr.onrender.com/mainpage', {...info}, {withCredentials: true});
    return data;
}
