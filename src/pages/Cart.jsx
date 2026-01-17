import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity, clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        background: 'white',
        borderRadius: '10px',
        margin: '2rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your cart is empty</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Add some products to your cart!</p>
        <Link to="/products" style={{
          display: 'inline-block',
          background: '#007bff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          Browse Products
        </Link>
      </div>
    );
  }

  const shipping = 5.99;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Shopping Cart</h1>

      <div style={{ 
        background: 'white', 
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8f9fa' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Product</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Price</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Quantity</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Total</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img 
                      src={item.image || 'https://via.placeholder.com/80'} 
                      alt={item.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
                    />
                    <div>
                      <h3 style={{ margin: 0 }}>{item.name}</h3>
                      <p style={{ color: '#666', margin: 0 }}>{item.description}</p>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>${item.price.toFixed(2)}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        border: '1px solid #ddd',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      -
                    </button>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '40px', 
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        border: '1px solid #ddd',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => handleRemove(item.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginTop: '2rem',
        maxWidth: '400px',
        marginLeft: 'auto'
      }}>
        <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          Order Summary
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}>
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}>
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '0.75rem'
        }}>
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '2px solid #eee',
          fontWeight: 'bold',
          fontSize: '1.25rem'
        }}>
          <span>Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button 
            onClick={handleClearCart}
            style={{
              flex: 1,
              padding: '1rem',
              background: '#f8f9fa',
              color: '#666',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear Cart
          </button>
          <Link to="/checkout" style={{
            flex: 2,
            padding: '1rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'block'
          }}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;