import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');  // Ou a URL do seu back-end
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Produtos</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product._id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <h6 className="text-muted">R${product.price.toFixed(2)}</h6>
                                <div className="d-flex justify-content-between">
                                    <span className="badge bg-primary">{product.stock} em estoque</span>
                                    <button className="btn btn-success">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
