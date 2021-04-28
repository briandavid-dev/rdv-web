import request from "../config/request";

const api = {};

api.getNoticiasListado = (lang) => {
  return request({
    method: "GET",
    url: `noticias-listado/${lang}`,
  });
};

export default api;
