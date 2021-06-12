import request from "../../../../config/request";

const api = {};

api.getProductos = (empresaId, type) => {
  return request({
    method: "GET",
    url: `empresa/${empresaId}/productos/${type}`,
  });
};

api.getProducto = (productoId) => {
  return request({
    method: "GET",
    url: `empresa/producto/${productoId}`,
  });
};

api.deteteProducto = (payload) => {
  return request({
    method: "DELETE",
    url: "empresa/producto/",
    data: payload,
  });
};

api.insertProducto = (payload) => {
  return request({
    method: "POST",
    url: "empresa/producto/",
    data: payload,
  });
};

api.updateProducto = (payload) => {
  return request({
    method: "PUT",
    url: "empresa/producto/",
    data: payload,
  });
};

export default api;
