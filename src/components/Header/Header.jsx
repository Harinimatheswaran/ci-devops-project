import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className='logo-img'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='nav-menu'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;