import { useState } from "react"
import axios from "axios"

export const REQUEST_URI = ''

export const useXHR_Request = async(method,url,userdata) =>{
  const auth = localStorage.getItem('auth') || null;

  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)

  async function startRequest (){
    setIsLoading(true)
    try {
        setResponse({
        success: await axios({
        url: url,
        method: method,
        baseURL: REQUEST_URI,
        headers: {'Authorization': auth ? `Bearer ${auth}` : undefined,},
        params: method === 'get' ? userdata : undefined,
        data: method !== 'get' ? userdata : undefined,
        timeout: 10000,
        })
        })
        setIsLoading(false)
    } catch (err) {
        setResponse({error: err})
        setIsLoading(false)
    }
}
    
  return {isLoading, response, startRequest}
}