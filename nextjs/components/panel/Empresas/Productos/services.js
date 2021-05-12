import request from "../../../../config/request";

const api = {};

api.getProductos = (empresaId) => {
  return request({
    method: "GET",
    url: `productos/${empresaId}`,
  });
};

api.deteteProductos = (payload) => {
  return request({
    method: "DELETE",
    url: "productos/",
    data: payload,
  });
};

api.insertProductos = (payload) => {
  return request({
    method: "POST",
    url: "productos/",
    data: payload,
  });
};

api.updateProductos = (payload) => {
  return request({
    method: "PUT",
    url: "productos/",
    data: payload,
  });
};

export default api;
