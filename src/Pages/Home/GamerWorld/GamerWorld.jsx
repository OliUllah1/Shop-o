import React from 'react';
import { FaArrowRight,FaAngleRight,FaStar} from "react-icons/fa";
import gamer from '../../../assets/images/gamer/gamer-1.jpg'
import product1 from '../../../assets/images/gamer/product-img-1.jpg'
import product2 from '../../../assets/images/gamer/product-img-2.jpg'
import product3 from '../../../assets/images/gamer/product-img-3.jpg'
const GamerWorld = () => {
    return (
        <div className='px-2 lg:px-10 py-20'>
            <div className='flex mb-5 justify-between items-center'>
                <h1 className='text-3xl font-bold'>Gamer World</h1>
                <p className='flex text-xl font-semibold items-center gap-3'>View More <FaArrowRight></FaArrowRight></p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='w-full h-full relative'>
                    <img className='' src={gamer} alt="" />
                    <div className='absolute space-y-2 top-0 left-0 p-10'>
                        <h4 className='font-bold text-lg'>Mobile & Tablet</h4>
                        <ul className='space-y-1 text-gray-500'>
                            <li className='hover:underline'>Xioami</li>
                            <li className='hover:underline'>Apple</li>
                            <li className='hover:underline'>Google</li>
                            <li className='hover:underline'>Samsung</li>
                        </ul>
                        <button className='flex font-bold items-center gap-1'>Shop Now <FaAngleRight></FaAngleRight></button>
                    </div>
                </div>
                <div className='bg-white'>
                    <img className='mx-auto mt-14 h-60' src={product1} alt="" />
                    <div className='p-10 space-y-4'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='px-10 py-3'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm text-gray-500'>Prodcuts Available</p>
                            <h5 className='font-bold'>20</h5>
                        </div>
                    <progress class="progress progress-warning w-56" value="70" max="100"></progress>
                    </div>

                    <img className='mx-auto h-60' src={product2} alt="" />
                    <div className='px-10 py-7 space-y-4'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white'>
                    <img className='mx-auto mt-10 h-60' src={product3} alt="" />
                    <div className='px-10 py-14 space-y-4'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamerWorld;