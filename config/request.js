import axios from "axios";

const config = {
  baseURL: process.env.NEXT_PUBLIC_URL_API_RDV,
};

const request = axios.create(config);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default request;
