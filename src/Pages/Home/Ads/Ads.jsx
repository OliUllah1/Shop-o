import React from 'react';
import ads1 from '../../../assets/images/ads/ads-1.webp'
import ads2 from '../../../assets/images/ads/ads-2.webp'
const Ads = () => {
    return (
        <div className='p-10 flex gap-10'>
            
                <div className='w-full cursor-pointer'>
                <img className='w-full' src={ads1} alt="" />
                </div>
                <div className='w-full cursor-pointer'>
                <img className='w-full' src={ads2} alt="" />
                </div>
            
        </div>
    );
};

export default Ads;