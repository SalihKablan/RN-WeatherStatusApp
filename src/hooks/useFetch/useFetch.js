import { useEffect, useState} from "react";
import axios from 'axios';

function useFetch(url,token){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
    try {
        const {data: responseData} = await axios.get(url,{ headers : {
            'Authorization': token,
            'Content-Type': 'application/json'
     } });
        setData(responseData);
        setLoading(false);
    }   catch (err) {
        setError(err.message);
        setLoading(false);
    }
  };

    useEffect(() => {
        fetchData();
    }, []);



    return {error,loading,data,fetchData};
}

export default useFetch;