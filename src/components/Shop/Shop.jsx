import React, { useEffect, useState } from 'react';
import './Shop.css';
import ShopDetails from '../ShopDetails/ShopDetails';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

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
    addToDb(product.id)
}

useEffect( () => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find( product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    setCart(savedCart);
} , [products])

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