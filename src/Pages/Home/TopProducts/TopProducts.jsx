import React from 'react';
import { FaArrowRight,FaStar } from "react-icons/fa";
import product1 from '../../../assets/images/top-products/product-img-1.jpg'
import product2 from '../../../assets/images/top-products/product-img-2.jpg'
import product3 from '../../../assets/images/top-products/product-img-3.jpg'
import product4 from '../../../assets/images/top-products/product-img-4.jpg'

const TopProducts = () => {
    return (
        <div className='p-10 space-y-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Top Selling Products</h1>
                <button className='flex text-xl font-semibold items-center gap-1'>View More <FaArrowRight></FaArrowRight></button>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white p-8 flex gap-10 items-center'>
                    <img src={product1} alt="" />
                    <div className='space-y-3'>
                        <div className='flex gap-2 text-yellow-500'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <h3 className='font-semibold hover:text-yellow-600 text-lg'>Senmei ipsum dolore eiusmod dolor officia do nisi</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                        <button className='px-5 text-sm font-semibold py-2 bg-yellow-500'>Add To Cart</button>
                    </div>
                </div>
                <div className='bg-white p-8 flex gap-10 items-center'>
                    <img className='' src={product2} alt="" />
                    <div className='space-y-3'>
                        <div className='flex gap-2 text-yellow-500'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <h3 className='font-semibold hover:text-yellow-600 text-lg'>Canopoly duis voluptate dolor sunt sit adipisicing in</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$72.97</span>  <span className='text-red-600'>$39.03</span></p>
                        <button className='px-5 text-sm font-semibold py-2 bg-yellow-500'>Add To Cart</button>
                    </div>
                </div>
                <div className='bg-white p-8 flex gap-10 items-center'>
                    <img  src={product3} alt="" />
                    <div className='space-y-3'>
                        <div className='flex gap-2 text-yellow-500'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <h3 className='font-semibold hover:text-yellow-600 text-lg'>Unisure aliqua repreh ex cupt qui elit officia</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$29.29</span>  <span className='text-red-600'>$19.99</span></p>
                        <button className='px-5 text-sm font-semibold py-2 bg-yellow-500'>Add To Cart</button>
                    </div>
                </div>
                <div className='bg-white p-8 flex gap-10 items-center'>
                    <img className=''  src={product4} alt="" />
                    <div className='space-y-3'>
                        <div className='flex gap-2 text-yellow-500'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                        <h3 className='font-semibold hover:text-yellow-600 text-lg'>Kenegy consectetur id ex nulla in adipisicing deserunt</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$49.49</span>  <span className='text-red-600'>$24.24</span></p>
                        <button className='px-5 text-sm font-semibold py-2 bg-yellow-500'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;