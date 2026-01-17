import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product APIs
export const productAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (product) => api.post('/products', product),
  updateProduct: (id, product) => api.put(`/products/${id}`, product),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

// Cart APIs
export const cartAPI = {
  getCart: (userId) => api.get(`/cart/${userId}`),
  addToCart: (userId, productId, quantity) => 
    api.post(`/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`),
  removeFromCart: (userId, productId) =>
    api.post(`/cart/remove?userId=${userId}&productId=${productId}`),
  clearCart: (userId) => api.post(`/cart/clear/${userId}`),
};

// Test APIs
export const testAPI = {
  healthCheck: () => api.get('/test/health'),
  dbCheck: () => api.get('/test/db'),
  configCheck: () => api.get('/test/config'),
};

// Auth APIs
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
};

export default api;