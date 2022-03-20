import request from "../config/request";

const api = {};

api.getHomeNoticias = (lang) => {
  return request({
    method: "GET",
    url: `home/noticias/${lang}`,
  });
};

export default api;
