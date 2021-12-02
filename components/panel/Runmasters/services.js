import request from "../../../config/request";

const api = {};

api.getAll = (lang) => {
  return request({
    method: "GET",
    url: `runmasters?lang=${lang}`,
  });
};

api.post = (payload) => {
  return request({
    method: "POST",
    url: `runmasters/`,
    data: payload,
  });
};

api.delete = (id) => {
  return request({
    method: "DELETE",
    url: `runmasters/${id}`,
  });
};

api.update = (id, payload) => {
  return request({
    method: "PUT",
    url: `runmasters/${id}`,
    data: payload,
  });
};

export default api;
