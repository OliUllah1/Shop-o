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
import ads from '../../../assets/images/arrivals/ads.png'
const NewArrivals = () => {
    return (
        <div className='px-10 pb-10 space-y-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>New Arrivals</h1>
                <button className='flex text-xl font-semibold items-center gap-1'>View More <FaArrowRight></FaArrowRight></button>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='bg-white'>
                    <img className='mx-auto mt-14 h-60' src={product1} alt="" />
                    <div className='p-10 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                    <div className='px-10 py-7 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white relative'>
                    <p className='px-3 py-1 text-xs font-bold bg-green-500 text-white absolute top-5 right-5 rounded-full'>POPULAR</p>
                    <img className='mx-auto mt-10 h-60' src={product3} alt="" />
                    <div className='px-10 py-14 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                            <h5 className='font-bold'>80</h5>
                        </div>
                    <progress class="progress progress-warning w-56" value="80" max="100"></progress>
                    </div>

                    <img className='mx-auto h-60' src={product10} alt="" />
                    <div className='px-10 py-7 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                            <h5 className='font-bold'>12</h5>
                        </div>
                    <progress class="progress progress-warning w-56" value="50" max="100"></progress>
                    </div>

                    <img className='mx-auto h-60' src={product4} alt="" />
                    <div className='px-10 py-7 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white'>
                    <img className='mx-auto mt-14 h-60' src={product5} alt="" />
                    <div className='p-10 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white relative'>
                    <p className='px-3 py-1 text-xs font-bold bg-yellow-500 text-white absolute top-5 right-5 rounded-full'>NEW</p>
                    <img className='mx-auto mt-10 h-60' src={product6} alt="" />
                    <div className='px-10 py-14 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                            <h5 className='font-bold'>17</h5>
                        </div>
                    <progress class="progress progress-warning w-56" value="40" max="100"></progress>
                    </div>

                    <img className='mx-auto h-60' src={product7} alt="" />
                    <div className='px-10 py-7 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white'>
                    <img className='mx-auto mt-14 h-60' src={product8} alt="" />
                    <div className='p-10 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                            <h5 className='font-bold'>16</h5>
                        </div>
                    <progress class="progress progress-warning w-56" value="30" max="100"></progress>
                    </div>

                    <img className='mx-auto h-60' src={product9} alt="" />
                    <div className='px-10 py-7 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                        <h4 className='font-bold hover:text-yellow-600 text-lg'>Xoggle aute et pariatur adipisicing nostrud et...</h4>
                        <p className='font-bold text-xl space-x-2'><span className='text-gray-500 line-through '>$27.27</span>  <span className='text-red-600'>$18.73</span></p>
                    </div>
                </div>
                <div className='bg-white relative'>
                    <p className='px-3 py-1 text-xs font-bold bg-green-500 text-white absolute top-5 right-5 rounded-full'>POPULAR</p>
                    <img className='mx-auto mt-10 h-60' src={product1} alt="" />
                    <div className='px-10 py-14 space-y-2'>
                        <div className='flex gap-2 text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
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
                    <div className='px-10 py-7 space-y-2'>
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
            <div>
            <img  className='mx-auto cursor-pointer' src={ads} alt="" />
            </div>
        </div>
    );
};

export default NewArrivals;