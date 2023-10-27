import React, { useEffect, useState } from 'react';
import './Shop.css';
import ShopDetails from '../ShopDetails/ShopDetails';
import Cart from '../Cart/Cart';

const Shop = () => {
// useState 
const [products, setProducts] = useState([]);

const [cart, setCart] = useState([]);

// useEffect 
useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
} , []);

const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);
}

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <ShopDetails
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></ShopDetails>)
                }
                <div>
                    <h1>Available Products : {products.length}</h1>
                </div>
            </div>
            <div className="order-summery">
                <Cart
                cart={cart}

                ></Cart>
            </div>
        </div>
    );
};

export default Shop;