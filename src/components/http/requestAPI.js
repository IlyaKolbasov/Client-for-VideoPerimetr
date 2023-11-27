import { $host } from "./host";
import axios from "axios";
export const getRequests = async () => {
    const { data } = await axios.get('http://localhost:8080/admin', {headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }});
    return data;
}

export const getRequestsInProgress = async () => {
    const { data } = await axios.get('http://localhost:8080/admin/isProcessing', {headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }});
    return data;
}
export const deleteRecord = async (id) => {
    const { data } = await axios.delete('http://localhost:8080/admin/delete',
        { params: { id }, headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })

}

export const updateStatus = async (id) => {
    const { data } = await axios.put('http://localhost:8080/admin/updatestatus',
        { }, { params: { id }, headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }})

}