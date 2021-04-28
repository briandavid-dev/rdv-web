import request from "../config/request";

const api = {};

api.getNoticiasListado = (lang) => {
  return request({
    method: "GET",
    url: `noticias-listado/${lang}`,
  });
};

api.getNoticiasUltima = (lang) => {
  return request({
    method: "GET",
    url: `noticias-ultima/${lang}`,
  });
};

export default api;
