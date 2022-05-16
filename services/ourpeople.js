import request from "../config/request";

const api = {};

api.getAll = () => {
  return request({
    method: "GET",
    url: `our-people`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `our-people`,
    data: payload,
  });
};

api.updateImageDoc = (payload) => {
  return request({
    method: "PUT",
    url: `our-people/image`,
    data: payload,
  });
};

export default api;
