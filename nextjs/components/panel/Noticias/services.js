import axios from "axios";

const config = {
  baseURL: "https://www.bmosoluciones.com/api-rdv/",
  // "Content-Type": "application/json",
};
const request = axios.create(config);

const api = {};

api.getNoticias = () => {
  return request({
    method: "GET",
    url: "contenido/",
  });
};

api.deteteNoticias = (payload) => {
  return request({
    method: "DELETE",
    url: "contenido/",
    data: payload,
  });
};

api.insertNoticias = (payload) => {
  return request({
    method: "POST",
    url: "contenido/",
    data: payload,
  });
};

api.updateNoticias = (payload) => {
  return request({
    method: "UPDATE",
    url: "contenido/",
    data: payload,
  });
};

export default api;
