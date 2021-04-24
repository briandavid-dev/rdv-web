import request from "../../../config/request";

const api = {};

api.login = (payload) => {
  return request({
    method: "POST",
    url: "users/login",
    data: payload,
  });
};

export default api;
