import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input type="password" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#007bff', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;