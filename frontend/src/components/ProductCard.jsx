import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl || 'https://via.placeholder.com/300x200',
      description: product.description,
    }));
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s'
    }}>
      <img 
        src={product.imageUrl || 'https://via.placeholder.com/300x200'} 
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {product.description}
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
            ${product.price.toFixed(2)}
          </div>
          <button 
            onClick={handleAddToCart}
            style={{
              padding: '0.5rem 1rem',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;