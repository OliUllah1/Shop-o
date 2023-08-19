import React from 'react';
import banner1 from '../../../../assets/images/banner/banner-1.png'
import banner2 from '../../../../assets/images/banner/banner-2.png'
import banner3 from '../../../../assets/images/banner/banner-3.png'

const Banner = () => {
    return (
        <div className='p-2 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <img className='lg:col-span-2 shadow w-full cursor-pointer lg:row-span-2' src={banner1} alt="" />
            <img className='cursor-pointer shadow w-full h-full' src={banner2} alt="" />
            <img className='cursor-pointer shadow w-full h-full' src={banner3} alt="" />
        </div>
    );
};

export default Banner;