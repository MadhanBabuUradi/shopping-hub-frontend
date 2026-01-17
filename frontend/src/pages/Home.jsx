import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import { FaArrowRight, FaTruck, FaShieldAlt, FaHeadset, FaCreditCard } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getAllProducts();
      const data = response.data;
      setProducts(data);
      setFeaturedProducts(data.slice(0, 4)); // Show first 4 as featured
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { name: 'Electronics', count: 120, image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Fashion', count: 85, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Home & Garden', count: 67, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Sports', count: 42, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  ];

  const features = [
    { icon: <FaTruck />, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: <FaShieldAlt />, title: 'Secure Payment', desc: '100% secure transactions' },
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Ready to help you' },
    { icon: <FaCreditCard />, title: 'Money Back', desc: '30-day return policy' },
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Amazing Products</h1>
          <p className="hero-subtitle">Shop the latest trends in electronics, fashion, home goods, and more.</p>
          <Link to="/products" className="hero-button">
            Shop Now <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Browse products by your favorite categories</p>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={`/products?category=${category.name}`} key={index} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <p>{category.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <Link to="/products" className="view-all">
              View All <FaArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <h2>Summer Sale Up to 50% Off</h2>
            <p>Don't miss this amazing opportunity to grab your favorite items at discounted prices.</p>
            <Link to="/products" className="banner-button">
              Shop Sale
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;