

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  obtenerProductos() {
    return apiClient.get('/products');
  },
  obtenerProductoPorId(id) {
    return apiClient.get(`/products/${id}`);
  },
  crearProducto(producto) {
    return apiClient.post('/products', producto);
  },
  actualizarProducto(id, producto) {
    return apiClient.put(`/products/${id}`, producto);
  },
  eliminarProducto(id) {
    return apiClient.delete(`/products/${id}`);
  }
};