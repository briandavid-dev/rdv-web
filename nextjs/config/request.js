import axios from "axios";

const config = {
  // baseURL: "https://www.bmosoluciones.com/services-rdv/",
  baseURL: "http://localhost:5000/services-rdv/",
  // "Content-Type": "application/json",
};
const request = axios.create(config);

export default request;
