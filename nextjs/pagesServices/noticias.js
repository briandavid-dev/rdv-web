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

api.getNoticia = (lang, url) => {
  return request({
    method: "GET",
    url: `noticias/${url}/${lang}`,
  });
};

export default api;
