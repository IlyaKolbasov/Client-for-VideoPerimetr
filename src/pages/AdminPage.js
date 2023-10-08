import {useState, useEffect} from "react";
import {deleteRecord, getRequests} from "../http";
import {BasicAccordion} from "../components/BasicAccordion";
import Header from "../components/Header/index.js"
import Footer from "../components/Footer/index.js"
import Error from "../components/Error";


export const AdminPage = () => {
     const [records, setRecords] = useState([]);
     const [isClicked, setIsClicked] = useState(false);
     // const [error, setError] = useState(false);

    const getRecords = async () => {
        const records = await getRequests();

        return records;
    }

    // useEffect(() => setError(false))

     useEffect(() => {
         getRecords()
             .then((res) => setRecords(res))
             // .catch((err) => setError(true))
     }, [isClicked])

    const handleClick = () => {
        setIsClicked((prev) => !prev)
    }

    // if (error) {
    //     return <Error />
    // }

    return (
        <>
            <main style={{margin: "80px auto", maxWidth: "1200px", width: "100%", padding: "0 20px"}}>
            {
                records.map((record) => <BasicAccordion record={record} handleClick={handleClick} /> )
            }
            </main>
        </>
    )
}