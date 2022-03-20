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

export default api;
