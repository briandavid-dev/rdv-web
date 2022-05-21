import request from "../config/request";

const api = {};

api.getAll = () => {
  return request({
    method: "GET",
    url: `aboutus`,
  });
};

api.put = (payload) => {
  return request({
    method: "PUT",
    url: `aboutus`,
    data: payload,
  });
};

api.updateImageDoc = (payload) => {
  return request({
    method: "PUT",
    url: `aboutus/image`,
    data: payload,
  });
};

api.deleteFileDoc = (payload) => {
  return request({
    method: "DELETE",
    url: `aboutus/image`,
    data: payload,
  });
};

export default api;
