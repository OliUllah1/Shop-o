import React from 'react';
import { FaArrowRight,FaAngleRight,FaStar} from "react-icons/fa";
import product1 from '../../../assets/images/arrivals/product-img-1.jpg'
import product2 from '../../../assets/images/arrivals/product-img-2.jpg'
import product3 from '../../../assets/images/arrivals/product-img-3.jpg'
import product4 from '../../../assets/images/arrivals/product-img-4.jpg'
import product5 from '../../../assets/images/arrivals/product-img-5.jpg'
import product6 from '../../../assets/images/arrivals/product-img-6.jpg'
import product7 from '../../../assets/images/arrivals/product-img-7.jpg'
import product8 from '../../../assets/images/arrivals/product-img-8.jpg'
import product9 from '../../../assets/images/arrivals/product-img-9.jpg'
import product10 from '../../../assets/images/arrivals/product-img-10.jpg'

const Popular = () => {
    return (
        <div className='p-10 space-y-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Popular Sales</h1>
                <button className='flex text-xl font-semibold items-center gap-1'>View More <FaArrowRight></FaArrowRight></button>
            </div>
            <div className='grid grid-cols-3 gap-x-5 gap-y-[2px]'>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product1} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product2} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product3} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product4} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product5} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product6} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product7} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product8} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product9} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product10} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product1} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white flex items-center gap-10 px-5 py-3'>
                    <img className='w-20' src={product7} alt="" />
                    <div className='space-y-2'>
                        <h3 className='font-bold text-lg hover:text-blue-800'>Xoggle aute et pariatur...</h3>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;