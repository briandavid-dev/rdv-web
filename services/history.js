import request from "../config/request";

const api = {};

api.getAll = () => {
  return request({
    method: "GET",
    url: `history`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `history`,
    data: payload,
  });
};

api.updateImageDoc = (payload) => {
  return request({
    method: "PUT",
    url: `history/image`,
    data: payload,
  });
};

export default api;
