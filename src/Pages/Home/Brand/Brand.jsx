import React from 'react';
import brand1 from '../../../assets/images/brand/brand-1.webp'
import brand2 from '../../../assets/images/brand/brand-2.webp'
import brand3 from '../../../assets/images/brand/brand-3.webp'
import brand4 from '../../../assets/images/brand/brand-4.webp'
import brand5 from '../../../assets/images/brand/brand-5.webp'
import brand6 from '../../../assets/images/brand/brand-6.webp'
import brand7 from '../../../assets/images/brand/brand-7.webp'
import brand8 from '../../../assets/images/brand/brand-8.webp'
import brand9 from '../../../assets/images/brand/brand-9.webp'
import brand10 from '../../../assets/images/brand/brand-10.webp'
import brand11 from '../../../assets/images/brand/brand-11.webp'
import brand12 from '../../../assets/images/brand/brand-12.webp'

const Brand = () => {
    return (
        <div className='px-10 pb-10 space-y-10'>
            <h1 className='font-bold text-4xl'>Shop by Brand</h1>
            <div className='grid grid-cols-6 gap-1'>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand1} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand2} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand3} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand4} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand5} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand6} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand7} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand8} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand9} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand10} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand11} alt="" />
            </div>
            <div className='p-10 bg-white'>
                <img className='mx-auto' src={brand12} alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Brand;