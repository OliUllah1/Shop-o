import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const TopProducts = () => {
    return (
        <div className='p-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Top Selling Products</h1>
                <button className='flex text-xl font-semibold items-center gap-1'>View More <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default TopProducts;