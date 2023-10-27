import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for(const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <p>Selected Products : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax}</p>
            <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
            <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            <button className='btn-order'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;