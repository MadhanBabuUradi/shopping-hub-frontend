import React, { useState, useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://your-api.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch products:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty array means run once on component mount

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Failed to fetch products: {error}</div>;

    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
