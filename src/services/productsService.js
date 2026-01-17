// Mock product data - similar to Amazon products
const products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro (256 GB) - Black Titanium",
    price: 134900,
    originalPrice: 149900,
    discount: 10,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    category: "Electronics",
    brand: "Apple",
    rating: 4.7,
    reviews: 1243,
    description: "Latest iPhone with A17 Pro chip, Titanium design, and advanced camera system.",
    features: ["A17 Pro Chip", "48MP Main Camera", "USB-C", "Dynamic Island", "ProMotion Display"],
    stock: 50,
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy Book3 Ultra Intel 13th Gen",
    price: 189990,
    originalPrice: 219990,
    discount: 14,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    category: "Electronics",
    brand: "Samsung",
    rating: 4.5,
    reviews: 856,
    description: "Ultra-thin laptop with AMOLED display and powerful Intel processor.",
    features: ["16-inch AMOLED", "Intel i9", "RTX 4070", "32GB RAM", "1TB SSD"],
    stock: 25,
    inStock: true
  },
  {
    id: 3,
    name: "Nike Air Max 270 React Men's Running Shoes",
    price: 12995,
    originalPrice: 15995,
    discount: 19,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Fashion",
    brand: "Nike",
    rating: 4.3,
    reviews: 2345,
    description: "Comfortable running shoes with Air Max cushioning.",
    features: ["Air Max Cushioning", "Breathable Mesh", "Rubber Outsole", "Lightweight"],
    stock: 100,
    inStock: true
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    brand: "Sony",
    rating: 4.8,
    reviews: 1890,
    description: "Industry-leading noise cancellation with premium sound quality.",
    features: ["Noise Cancelling", "30hr Battery", "HD Voice", "Touch Controls", "Bluetooth 5.2"],
    stock: 75,
    inStock: true
  },
  {
    id: 5,
    name: "Amazon Echo Dot (5th Gen) with clock | Glacier White",
    price: 5499,
    originalPrice: 6499,
    discount: 15,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
    category: "Electronics",
    brand: "Amazon",
    rating: 4.2,
    reviews: 4567,
    description: "Smart speaker with Alexa and improved audio quality.",
    features: ["Alexa Built-in", "LED Display", "Better Audio", "Smart Home Hub"],
    stock: 200,
    inStock: true
  },
  {
    id: 6,
    name: "Levi's Men's 512 Slim Fit Jeans",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Fashion",
    brand: "Levi's",
    rating: 4.4,
    reviews: 3210,
    description: "Classic slim fit jeans with stretch comfort.",
    features: ["Slim Fit", "Stretch Denim", "Machine Wash", "5 Pocket"],
    stock: 150,
    inStock: true
  },
  {
    id: 7,
    name: "Dyson V15 Detect Cordless Vacuum Cleaner",
    price: 59900,
    originalPrice: 69900,
    discount: 14,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    category: "Home",
    brand: "Dyson",
    rating: 4.6,
    reviews: 890,
    description: "Powerful cordless vacuum with laser dust detection.",
    features: ["Laser Detection", "60min Runtime", "HEPA Filter", "5 Attachments"],
    stock: 30,
    inStock: true
  },
  {
    id: 8,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    category: "Home",
    brand: "Instant Pot",
    rating: 4.7,
    reviews: 5678,
    description: "Multi-functional pressure cooker for quick meals.",
    features: ["7 Functions", "Safety Features", "Stainless Steel", "Easy Clean"],
    stock: 80,
    inStock: true
  },
  {
    id: 9,
    name: "Apple MacBook Air M2 Chip (2023 Model)",
    price: 114990,
    originalPrice: 134990,
    discount: 15,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Electronics",
    brand: "Apple",
    rating: 4.8,
    reviews: 2100,
    description: "Supercharged by M2 chip with 13-inch Liquid Retina display.",
    features: ["M2 Chip", "8GB RAM", "256GB SSD", "13.6-inch Display", "18hr Battery"],
    stock: 40,
    inStock: true
  },
  {
    id: 10,
    name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
    price: 74990,
    originalPrice: 84990,
    discount: 12,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    category: "Electronics",
    brand: "Canon",
    rating: 4.6,
    reviews: 890,
    description: "Entry-level mirrorless camera with 24.2MP sensor.",
    features: ["24.2MP Sensor", "4K Video", "Wi-Fi", "Kit Lens", "Lightweight"],
    stock: 35,
    inStock: true
  },
  {
    id: 11,
    name: "Adidas Ultraboost 22 Running Shoes",
    price: 15999,
    originalPrice: 18999,
    discount: 16,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400",
    category: "Fashion",
    brand: "Adidas",
    rating: 4.5,
    reviews: 2890,
    description: "Premium running shoes with Boost technology.",
    features: ["Boost Technology", "Primeknit Upper", "Continental Rubber", "Lightweight"],
    stock: 120,
    inStock: true
  },
  {
    id: 12,
    name: "Philips Air Fryer XXL with Fat Removal Technology",
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    category: "Home",
    brand: "Philips",
    rating: 4.4,
    reviews: 4321,
    description: "Large capacity air fryer with fat removal technology.",
    features: ["XXL Capacity", "Fat Removal", "Digital Display", "7 Presets"],
    stock: 65,
    inStock: true
  }
];

// API service functions
export const getProducts = async (params = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filteredProducts = [...products];
  
  // Apply search filter
  if (params.search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(params.search.toLowerCase()) ||
      product.brand.toLowerCase().includes(params.search.toLowerCase()) ||
      product.category.toLowerCase().includes(params.search.toLowerCase())
    );
  }
  
  // Apply category filter
  if (params.category) {
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase() === params.category.toLowerCase()
    );
  }
  
  // Apply price range filter
  if (params.minPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price >= parseInt(params.minPrice)
    );
  }
  
  if (params.maxPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price <= parseInt(params.maxPrice)
    );
  }
  
  // Apply rating filter
  if (params.minRating) {
    filteredProducts = filteredProducts.filter(product =>
      product.rating >= parseFloat(params.minRating)
    );
  }
  
  // Apply limit
  if (params.limit) {
    filteredProducts = filteredProducts.slice(0, params.limit);
  }
  
  return filteredProducts;
};

export const getProductById = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
};

export const getProductsByCategory = async (category) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const filteredProducts = products.filter(product =>
    product.category.toLowerCase() === category.toLowerCase()
  );
  
  return filteredProducts;
};

export const getFeaturedProducts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 250));
  
  // Return first 8 products as featured
  return products.slice(0, 8);
};

export const getCategories = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const categories = [...new Set(products.map(p => p.category))];
  return categories;
};

export const getBrands = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const brands = [...new Set(products.map(p => p.brand))];
  return brands;
};