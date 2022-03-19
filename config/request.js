import axios from "axios";

const config = {
  // baseURL: "https://www.bmosoluciones.com/services-rdv/", // PRODUCTION
  // baseURL: "http://localhost:1000/services-rdv/", // DEVELOMENT
  // "Content-Type": "application/json",
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
