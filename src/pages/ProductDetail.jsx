import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Details Page</h1>
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginTop: '1rem'
      }}>
        <h2>Product ID: {id}</h2>
        <p>This page shows detailed information about product {id}</p>
        <div style={{ marginTop: '1rem' }}>
          <h3>Features:</h3>
          <ul>
            <li>High quality product</li>
            <li>Warranty included</li>
            <li>Free shipping</li>
          </ul>
        </div>
        <button 
          onClick={() => window.history.back()}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;