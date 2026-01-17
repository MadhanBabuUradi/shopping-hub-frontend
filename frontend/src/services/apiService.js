import { productAPI, cartAPI } from './api';

class ApiService {
  // Product Services
  static async getProducts() {
    try {
      const response = await productAPI.getAllProducts();
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  static async getProductById(id) {
    try {
      const response = await productAPI.getProductById(id);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  // Cart Services
  static async getCart(userId = 1) {
    try {
      const response = await cartAPI.getCart(userId);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  static async addToCart(userId, productId, quantity = 1) {
    try {
      const response = await cartAPI.addToCart(userId, productId, quantity);
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }

  static async removeFromCart(userId, productId) {
    try {
      const response = await cartAPI.removeFromCart(userId, productId);
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  }

  // Health check
  static async checkHealth() {
    try {
      const response = await fetch('http://localhost:9091/api/test/health');
      return response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }
}

export default ApiService;