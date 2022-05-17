import request from "../config/request";

const api = {};

api.getAll = () => {
  return request({
    method: "GET",
    url: `rum`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `rum`,
    data: payload,
  });
};

api.updateImageDoc = (payload) => {
  return request({
    method: "PUT",
    url: `rum/image`,
    data: payload,
  });
};

export default api;
