import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className='mt-2'>
            <h2 className='mb-2 font-mono'>Welcome to our Homepage</h2>
            <Link className='font-bold' to="/search/">Search Food</Link>
        </div>
    );
};

export default Home;