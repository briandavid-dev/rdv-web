import axios from "axios";

const config = {
  baseURL: "https://www.bmosoluciones.com/services-rdv/",
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
    method: "PUT",
    url: "contenido/",
    data: payload,
  });
};

export default api;
