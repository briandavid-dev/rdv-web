import request from "../config/request";

const api = {};

api.getEmpresas = (lang) => {
  return request({
    method: "GET",
    url: `empresas/${lang}`,
  });
};

export default api;
