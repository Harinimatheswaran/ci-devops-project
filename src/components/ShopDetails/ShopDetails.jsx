import React from 'react';
import './ShopDetails.css';

const ShopDetails = ({ product }) => {
    console.log(product);
    // destructuring
    const { id, img, name, price, seller, stock, ratings, ratingsCount, shipping, quantity, category } = product;
    return (
        <div>

            <div className='cart-container'> 
                    <img src={img} alt="" />
                
                <div>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price : {price}</p>
                    <p>Menufectures : {seller}</p>
                    <p>Ratings : {ratings}</p>
                    {/* <p>Category : {category}</p> */}
                    {/* <p>{id}</p>
                    <p>{ratingsCount}</p>
                    <p>{stock}</p>
                    <p>{shipping}</p>
                    <p>{quantity}</p> */}
                </div>
                <button className='cart-btn'>Add To Cart</button>
            </div>
            

        </div>
    );
};

export default ShopDetails;