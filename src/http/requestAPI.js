import { $host } from "./host";
import axios from "axios";
export const getRequests = async () => {
    const { data } = await axios.get('https://videoperimetr.onrender.com/admin');
    return data;
}

export const deleteRecord = async (id) => {
    const { data } = await axios.delete('https://videoperimetr.onrender.com/admin/delete', { params: { id } })

}