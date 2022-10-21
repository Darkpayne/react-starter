import axios from 'axios'
import { useEffect, useState } from 'react'


const useAxiosGet = (url) => {
    axios.defaults.baseURL = "";
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(url,
                        {
                        headers: {
                        'Authorization': auth ? `Bearer ${auth}` : undefined,
                            },
                        }
                    );
                    setResponse(res.data)
                } catch (error) {
                    console.log(error?.message);
                    setError(error);               
                } finally{
                    setIsLoading(false);
                }
            }
            fetchData();
        }, 1000);
    }, [url])

  return {isLoading, response, error}
}

export default useAxiosGet