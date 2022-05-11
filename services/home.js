import request from "../config/request";

const api = {};

api.getHomeNoticias = (lang) => {
  return request({
    method: "GET",
    url: `home/noticias/${lang}`,
  });
};

api.getAllPageHome = (lang) => {
  return request({
    method: "GET",
    url: `home`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `home`,
    data: payload,
  });
};

api.postLogoEmpresa = (payload) => {
  return request({
    method: "POST",
    url: `home/logo-empresa`,
    data: payload,
  });
};

api.putLogosEmpresa = (payload) => {
  return request({
    method: "PUT",
    url: `home/logos-empresas`,
    data: payload,
  });
};

api.postVideoHome = (payload) => {
  return request({
    method: "POST",
    url: `home/video-home`,
    data: payload,
  });
};

api.getRrssFooter = (payload) => {
  return request({
    method: "GET",
    url: `home/rrss-footer`,
    data: payload,
  });
};

export default api;
