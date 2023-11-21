import { $authHost } from "./host";
import axios from "axios";

export const createRecord = async (info) => {
    const { data } = await axios.post('http://localhost:8080/mainpage', {...info}, {withCredentials: true});
    return data;
}
