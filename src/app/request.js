import axios from "axios";
import { useEffect, useState } from "react";
// import { loadProgressBar } from 'axios-progress-bar'

// export const REQUEST_URI = `https://${window.location.hostname}:4000/api`
export const REQUEST_URI = "/api";

loadProgressBar();

const XHRDebug = (setting = false) => {
  if (setting === true) {
    axios.interceptors.request.use(
      (req) => {
        var data = req.method === "get" ? req.params : req.data;
        console.log(
          `Request method: '${req.method}', to ${
            req.url
          }, with data: ${JSON.stringify(data, true)}`
        );
        return req;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axios.interceptors.response.use(
      (res) => {
        console.log(
          `Status: ${res.status}:${res.statusText} - Data: ${JSON.stringify(
            res.data,
            true
          )}`
        );
        return res;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
};

export const XHR = async (
  method,
  url,
  userdata = null,
  debugSetting = false
) => {
  XHRDebug(debugSetting);
  const auth = localStorage.getItem("auth") || null;
  return await axios({
    url: url,
    method: method,
    baseURL: REQUEST_URI,
    headers: { Authorization: auth ? `Bearer ${auth}` : undefined },
    params: method === "get" ? userdata : undefined,
    data: method !== "get" ? userdata : undefined,
    timeout: 10000,
  });
};

export const useAxiosGet = (url) => {
  axios.defaults.baseURL = "";
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: auth ? `Bearer ${auth}` : undefined,
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.log(error?.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [url]);

  return { isLoading, response, error, fetchData };
};

export const useXHR_Request = async (method, url, userdata) => {
  const auth = localStorage.getItem("auth") || null;

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  async function startRequest() {
    setIsLoading(true);
    try {
      setResponse({
        success: await axios({
          url: url,
          method: method,
          baseURL: REQUEST_URI,
          headers: { Authorization: auth ? `Bearer ${auth}` : undefined },
          params: method === "get" ? userdata : undefined,
          data: method !== "get" ? userdata : undefined,
          timeout: 10000,
        }),
      });
      setIsLoading(false);
    } catch (err) {
      setResponse({ error: err });
      setIsLoading(false);
    }
  }

  return { isLoading, response, startRequest };
};
