import React from 'react';
import { FaArrowRight,FaAngleRight} from "react-icons/fa";
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
            <div className='grid grid-cols-4'>
                <div className='w-full h-full relative'>
                    <img className='w-full h-full' src={gamer} alt="" />
                    <div className='absolute space-y-3 top-0 left-0 p-10'>
                        <h4 className='font-bold text-lg'>Mobile & Tablet</h4>
                        <ul className='space-y-2 text-gray-500'>
                            <li className='hover:underline'>Xioami</li>
                            <li className='hover:underline'>Apple</li>
                            <li className='hover:underline'>Google</li>
                            <li className='hover:underline'>Samsung</li>
                        </ul>
                        <button className='flex font-bold items-center gap-1'>Shop Now <FaAngleRight></FaAngleRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamerWorld;