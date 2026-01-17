
import './App.css';
import React, { useState, useEffect, useRef } from "react";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState({ name: 'Uradi Madhan Babu', email: 'umadhanbabuo1@gmail.com' });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notification, setNotification] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartRef = useRef(null);

  // Mock Data with more details
  const MOCK_PRODUCTS = [
    { 
      id: 1, 
      name: "iPhone 15 Pro Max", 
      price: 1199, 
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop", 
      category: "phones",
      rating: 4.8,
      reviews: 1243,
      description: "Titanium design, A17 Pro chip, and the best iPhone camera system.",
      colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
      inStock: true,
      featured: true
    },
    { 
      id: 2, 
      name: "MacBook Pro 16\" M3 Max", 
      price: 3499, 
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", 
      category: "laptops",
      rating: 4.9,
      reviews: 892,
      description: "Next-level performance with M3 Max chip for pros.",
      colors: ["Space Black", "Silver"],
      inStock: true,
      featured: true
    },
    { 
      id: 3, 
      name: "iPad Pro M2", 
      price: 1099, 
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", 
      category: "tablets",
      rating: 4.7,
      reviews: 567,
      description: "Supercharged by M2 chip with stunning Liquid Retina XDR display.",
      colors: ["Space Gray", "Silver"],
      inStock: true,
      featured: false
    },
    { 
      id: 4, 
      name: "AirPods Pro (2nd Gen)", 
      price: 249, 
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop", 
      category: "audio",
      rating: 4.6,
      reviews: 2341,
      description: "Active Noise Cancellation and Adaptive Transparency.",
      colors: ["White"],
      inStock: true,
      featured: true
    },
    { 
      id: 5, 
      name: "Apple Watch Ultra 2", 
      price: 799, 
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", 
      category: "wearables",
      rating: 4.8,
      reviews: 891,
      description: "The most rugged and capable Apple Watch ever.",
      colors: ["Titanium", "Ocean Band", "Trail Loop"],
      inStock: true,
      featured: false
    },
    { 
      id: 6, 
      name: "Studio Display", 
      price: 1599, 
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", 
      category: "monitors",
      rating: 4.5,
      reviews: 432,
      description: "27-inch 5K Retina display with A13 Bionic chip.",
      colors: ["Silver", "Space Gray"],
      inStock: false,
      featured: false
    },
    { 
      id: 7, 
      name: "Mac Studio", 
      price: 1999, 
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop", 
      category: "desktops",
      rating: 4.9,
      reviews: 321,
      description: "Next-level performance in a compact design.",
      colors: ["Silver"],
      inStock: true,
      featured: true
    },
    { 
      id: 8, 
      name: "Magic Keyboard", 
      price: 299, 
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop", 
      category: "accessories",
      rating: 4.4,
      reviews: 1892,
      description: "Touch ID and numeric keypad in a sleek design.",
      colors: ["Black", "White", "Silver"],
      inStock: true,
      featured: false
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'phones', name: 'Phones', icon: '📱' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'tablets', name: 'Tablets', icon: '📊' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'wearables', name: 'Wearables', icon: '⌚' }
  ];

  // Load products
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
      showNotification('Welcome to E-Shop Pro!', 'success');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification(`${product.name} added to cart!`, 'success');
    setIsCartOpen(true);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showNotification('Item removed from cart', 'info');
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Clear cart
  const clearCart = () => {
    if (cart.length > 0 && window.confirm("Clear all items from cart?")) {
      setCart([]);
      showNotification('Cart cleared', 'info');
    }
  };

  // Calculate totals
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Render loading skeleton
  if (loading) {
    return (
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <div className="skeleton-grid">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text short"></div>
                  <div className="skeleton-button"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <span className="logo-icon">🛍️</span>
            <h1>Shopping-HUB E-Shop<span className="logo-highlight">Pro</span></h1>
          </div>

          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for products, brands, and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  ×
                </button>
              )}
            </div>
          </div>

          <nav className="nav-menu">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </button>
            
            <button 
              className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => setCurrentPage('products')}
            >
              <span className="nav-icon">📦</span>
              <span className="nav-text">Products</span>
            </button>
            
            <div className="nav-cart-wrapper" ref={cartRef}>
              <button 
                className="nav-link cart-link"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <span className="nav-icon">🛒</span>
                <span className="nav-text">Cart</span>
                {cart.length > 0 && (
                  <span className="cart-badge">{getItemCount()}</span>
                )}
              </button>
              
              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h3>Shopping Cart ({getItemCount()} items)</h3>
                    <button className="close-cart" onClick={() => setIsCartOpen(false)}>
                      ×
                    </button>
                  </div>
                  
                  {cart.length === 0 ? (
                    <div className="empty-cart-dropdown">
                      <span className="empty-cart-icon">🛒</span>
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="cart-dropdown-items">
                        {cart.map(item => (
                          <div key={item.id} className="cart-dropdown-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                              <h4>{item.name}</h4>
                              <div className="cart-item-controls">
                                <div className="quantity-selector">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="quantity-btn"
                                  >
                                    −
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="quantity-btn"
                                  >
                                    +
                                  </button>
                                </div>
                                <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="remove-item-btn"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="cart-dropdown-footer">
                        <div className="cart-total">
                          <span>Total:</span>
                          <span className="total-amount">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="cart-actions">
                          <button 
                            className="btn-secondary"
                            onClick={() => { setIsCartOpen(false); setCurrentPage('cart'); }}
                          >
                            View Cart
                          </button>
                          <button className="btn-primary">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <button 
              className={`nav-link ${currentPage === 'account' ? 'active' : ''}`}
              onClick={() => setCurrentPage('account')}
            >
              <span className="nav-icon">👤</span>
              <span className="nav-text">Account</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage 
            products={products.filter(p => p.featured)}
            onProductClick={(product) => {
              setCurrentPage('products');
              setSelectedCategory(product.category);
            }}
            onShopNow={() => setCurrentPage('products')}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            products={filteredProducts}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onAddToCart={addToCart}
            searchQuery={searchQuery}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
            onContinueShopping={() => setCurrentPage('products')}
          />
        )}

        {currentPage === 'account' && (
          <AccountPage 
            user={user}
            onLogout={() => showNotification('Logged out successfully', 'info')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Home Page Component
const HomePage = ({ products, onProductClick, onShopNow }) => (
  <>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Elevate Your Digital Experience</h2>
            <p className="hero-subtitle">Discover premium electronics with cutting-edge technology and sleek design</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Avg. Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            <button className="btn-primary btn-large" onClick={onShopNow}>
              Shop Now →
            </button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop" alt="Premium Electronics" />
          </div>
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Handpicked selection of our best products</p>
        </div>
        <div className="featured-grid">
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="featured-card" onClick={() => onProductClick(product)}>
              <div className="featured-badge">Featured</div>
              <div className="featured-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="featured-content">
                <h3>{product.name}</h3>
                <div className="price-container">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
                <div className="rating">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                  <span>({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free delivery on orders over $50</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">↩️</div>
            <h3>30-Day Returns</h3>
            <p>Hassle-free return policy</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>100% secure encrypted transactions</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🏆</div>
            <h3>2-Year Warranty</h3>
            <p>Extended warranty on all products</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

// Products Page Component
const ProductsPage = ({ products, categories, selectedCategory, onCategoryChange, onAddToCart, searchQuery }) => (
  <div className="products-page">
    <div className="container">
      <div className="products-header">
        <h1 className="page-title">Shop Products</h1>
        <p className="page-subtitle">{products.length} products found{searchQuery && ` for "${searchQuery}"`}</p>
      </div>

      <div className="products-layout">
        {/* Categories Sidebar */}
        <aside className="categories-sidebar">
          <h3>Categories</h3>
          <div className="category-list">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => onCategoryChange(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="price-filter">
            <h3>Price Range</h3>
            <input type="range" min="0" max="5000" defaultValue="2500" className="price-slider" />
            <div className="price-range">
              <span>$0</span>
              <span>$5000</span>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="products-grid-container">
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                {product.inStock ? (
                  <div className="in-stock-badge">In Stock</div>
                ) : (
                  <div className="out-of-stock-badge">Out of Stock</div>
                )}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-actions">
                    <button className="action-btn wishlist">❤️</button>
                    <button className="action-btn quick-view">👁️</button>
                  </div>
                </div>
                
                <div className="product-content">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-rating">
                    <div className="stars">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="review-count">({product.reviews})</span>
                  </div>
                  
                  <div className="product-footer">
                    <div className="price-container">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">${product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => onAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Cart Page Component
const CartPage = ({ cart, onUpdateQuantity, onRemoveItem, onClearCart, onContinueShopping }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1 className="page-title">Shopping Cart</h1>
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            ← Continue Shopping
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some amazing products to your cart!</p>
            <button className="btn-primary btn-large" onClick={onContinueShopping}>
              Browse Products
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h3>{item.name}</h3>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="cart-item-category">{item.category}</p>
                    <div className="cart-item-footer">
                      <div className="quantity-selector">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <div className="price-info">
                        <span className="unit-price">${item.price} each</span>
                        <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="cart-actions-top">
                <button className="clear-cart-btn" onClick={onClearCart}>
                  Clear Cart
                </button>
                <button className="btn-secondary">
                  Save for Later
                </button>
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="promo-code">
                  <input type="text" placeholder="Enter promo code" />
                  <button className="apply-btn">Apply</button>
                </div>
                
                <button className="btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
                
                <div className="payment-methods">
                  <span>We accept:</span>
                  <div className="payment-icons">
                    <span>💳</span>
                    <span>🅿️</span>
                    <span>🍎</span>
                    <span>👾</span>
                  </div>
                </div>
                
                <div className="secure-checkout">
                  🔒 Secure checkout · SSL encrypted
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Account Page Component
const AccountPage = ({ user, onLogout }) => (
  <div className="account-page">
    <div className="container">
      <div className="account-layout">
        <aside className="account-sidebar">
          <div className="account-profile">
            <div className="profile-avatar">
              <span>👤</span>
            </div>
            <div className="profile-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          
          <nav className="account-nav">
            <button className="account-nav-item active">
              <span className="nav-icon">📊</span>
              Dashboard
            </button>
            <button className="account-nav-item">
              <span className="nav-icon">📦</span>
              Orders
            </button>
            <button className="account-nav-item">
              <span className="nav-icon">❤️</span>
              Wishlist
            </button>
            <button className="account-nav-item">
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
            <button className="account-nav-item">
              <span className="nav-icon">🛡️</span>
              Security
            </button>
            <button className="account-nav-item" onClick={onLogout}>
              <span className="nav-icon">🚪</span>
              Logout
            </button>
          </nav>
        </aside>
        
        <div className="account-content">
          <div className="account-header">
            <h1 className="page-title">My Account</h1>
            <p className="page-subtitle">Welcome back, {user.name.split(' ')[0]}! 👋</p>
          </div>
          
          <div className="account-stats">
            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <h3>12</h3>
                <p>Total Orders</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">❤️</div>
              <div className="stat-content">
                <h3>8</h3>
                <p>Wishlist Items</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <h3>4.9</h3>
                <p>Avg. Rating</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💳</div>
              <div className="stat-content">
                <h3>2</h3>
                <p>Payment Methods</p>
              </div>
            </div>
          </div>
          
          <div className="recent-orders">
            <h2>Recent Orders</h2>
            <div className="orders-table">
              <div className="table-header">
                <span>Order ID</span>
                <span>Date</span>
                <span>Status</span>
                <span>Total</span>
                <span>Action</span>
              </div>
              {[1, 2, 3].map(order => (
                <div key={order} className="table-row">
                  <span>#ORD{12345 + order}</span>
                  <span>Dec {10 + order}, 2024</span>
                  <span className="status delivered">Delivered</span>
                  <span>$1,299.00</span>
                  <button className="view-btn">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-icon">🛍️</span>
            <h2>E-Shop<span className="logo-highlight">Pro</span></h2>
          </div>
          <p className="footer-description">
            Premium electronics retailer offering cutting-edge technology with exceptional customer service.
          </p>
          <div className="social-links">
            <button className="social-btn">📘</button>
            <button className="social-btn">🐦</button>
            <button className="social-btn">📷</button>
            <button className="social-btn">💼</button>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li><button>All Products</button></li>
            <li><button>New Arrivals</button></li>
            <li><button>Featured</button></li>
            <li><button>Best Sellers</button></li>
            <li><button>Deals</button></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><button>Help Center</button></li>
            <li><button>Contact Us</button></li>
            <li><button>Shipping Info</button></li>
            <li><button>Returns & Exchanges</button></li>
            <li><button>Warranty</button></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe to get special offers and updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="contact-info">
            <p>📧 support@eshoppro.com</p>
            <p>📞 1-800-ESHOPPRO</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Shopping-HUB E-Shop Pro. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Cookies</button>
        </div>
      </div>
    </div>
  </footer>
);

// Header Component
const Header = () => null;

export default App;
