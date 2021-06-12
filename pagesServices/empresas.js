import request from "../config/request";

const api = {};

api.getEmpresas = (lang) => {
  return request({
    method: "GET",
    url: `empresas/${lang}`,
  });
};

api.getEmpresa = (id) => {
  return request({
    method: "GET",
    url: `empresa/${id}`,
  });
};

export default api;
