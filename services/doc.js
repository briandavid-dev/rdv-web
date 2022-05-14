import request from "../config/request";

const api = {};

api.getAll = () => {
  return request({
    method: "GET",
    url: `doc`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `doc`,
    data: payload,
  });
};

api.updateImageDoc = (payload) => {
  return request({
    method: "PUT",
    url: `doc/image`,
    data: payload,
  });
};

api.deleteFileDoc = (payload) => {
  return request({
    method: "DELETE",
    url: `doc/image`,
    data: payload,
  });
};

export default api;
