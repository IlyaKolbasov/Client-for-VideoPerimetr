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

    //  const records = [
    //     {
    //         "id": 4,
    //         "firstName": "111111",
    //         "lastName": "kolbis",
    //         "city": null,
    //         "street": null,
    //         "buildingNumber": null,
    //         "flatNumber": null,
    //         "number": "kolbis",
    //         "email": "kolbis@gamil.com",
    //         "fromTime": "11:20",
    //         "fromDate": "01.23.2000",
    //         "toTime": "11:20",
    //         "toDate": "01.23.2000",
    //         "status": "unProcessed"
    //     }
    // ]

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
                records.map((record) => <BasicAccordion record={record} handleClick={handleClick} inProgress={false} /> )
            }
            </main>
        </>
    )
}