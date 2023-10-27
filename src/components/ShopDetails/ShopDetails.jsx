import React from 'react';
import './ShopDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

const ShopDetails = ({ product, handleAddToCart }) => {
    // console.log(product);

    // destructuring
    const { id, img, name, price, seller, stock, ratings, ratingsCount, shipping, quantity, category } = product;

   
    return (
        <div>

            <div className='cart-container'>
                <img src={img} alt="" />

                <div>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price : ${price}</p>
                    <p>Menufectures : {seller}</p>
                    <p>Ratings : {ratings} <span className='star-icon'><FontAwesomeIcon icon={faStar} /></span> </p>
                    {/* <p>Category : {category}</p> */}
                    {/* <p>{id}</p>
                    <p>{ratingsCount}</p>
                    <p>{stock}</p>
                    <p>{shipping}</p>
                    <p>{quantity}</p> */}
                </div>
                <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add To Cart <FontAwesomeIcon icon={faCartShopping} /> </button>
            </div>


        </div>
    );
};

export default ShopDetails;