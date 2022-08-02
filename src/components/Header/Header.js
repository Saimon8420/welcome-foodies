import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='text-xl text-center grid-cols-3'>
            <Link className='ml-2' to="/">Home</Link>
            <Link className='ml-2 color' to="/login">Login</Link>
            <Link className='ml-2' to="/about">About Us</Link>
        </div>
    );
};

export default Header;