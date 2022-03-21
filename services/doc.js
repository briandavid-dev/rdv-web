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

export default api;
