import React, { useEffect, useState } from 'react';
import './Shop.css';
import ShopDetails from '../ShopDetails/ShopDetails';

const Shop = () => {
// useState 
const [products, setProducts] = useState([]);

// useEffect 
useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
} , [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <ShopDetails
                    key={product.id}
                    product={product}
                    ></ShopDetails>)
                }
                <div>
                    <h1>Available Products : {products.length}</h1>
                </div>
            </div>
            <div className="order-summery">
                <h1>order summery</h1>
            </div>
        </div>
    );
};

export default Shop;