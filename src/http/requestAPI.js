import { $host } from "./host";
import axios from "axios";
export const getRequests = async () => {
   // const { data } = await axios.get('http://localhost:8080/admin', {headers: {
    const { data } = await axios.get('https://videoperimetrclient.onrender.com/admin', {headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }});
    return data;
}

export const getRequestsInProgress = async () => {
   // const { data } = await axios.get('http://localhost:8080/admin/isProcessing', {headers: {
    const { data } = await axios.get('https://videoperimetrclient.onrender.com/admin/isProcessing', {headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }});
    return data;
}
export const deleteRecord = async (id) => {
    //const { data } = await axios.delete('http://localhost:8080/admin/delete',
    const { data } = await axios.delete('https://videoperimetrclient.onrender.com/admin/delete',
        { params: { id }, headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })

}

export const updateStatus = async (id) => {
   // const { data } = await axios.put('http://localhost:8080/admin/updatestatus',
    const { data } = await axios.put('https://videoperimetrclient.onrender.com/admin/updatestatus',
        { }, { params: { id }, headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }})

}