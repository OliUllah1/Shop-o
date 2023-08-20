import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import saller1 from '../../../assets/images/saller/saller-1.webp'
import saller2 from '../../../assets/images/saller/saller-2.webp'
import saller3 from '../../../assets/images/saller/saller-3.webp'
import saller4 from '../../../assets/images/saller/saller-4.webp'
import saller5 from '../../../assets/images/saller/saller-5.webp'
import saller6 from '../../../assets/images/saller/saller-6.webp'

const BestSaller = () => {
    return (
        <div className='p-10 space-y-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl'>Best Saller</h1>
                <button className='flex text-xl font-semibold items-center gap-1'>View More <FaArrowRight></FaArrowRight></button>
            </div>
            <div className='grid grid-cols-6 gap-10'>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller1} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Shopno BD</h3>
                </div>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller2} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Eecoms Shop</h3>
                </div>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller3} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Fusion X</h3>
                </div>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller4} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Rikayi Rox</h3>
                </div>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller5} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Habbriyi</h3>
                </div>
                <div className='space-y-2'>
                    <div className='w-40 h-40 flex items-center justify-center rounded-full bg-white'>
                        <img src={saller6} alt="" />
                    </div>
                    <h3 className='text-center hover:text-yellow-500 cursor-pointer font-semibold text-lg'>Rayhans</h3>
                </div>
            </div>
        </div>
    );
};

export default BestSaller;