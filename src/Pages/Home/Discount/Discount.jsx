import React from 'react';
import discountBg from '../../../assets/images/discount/discount-banner-1.jpg'
const Discount = () => {
    return (
        <div className='py-10 h-[420px] relative'>
            <img className='h-full  object-left-bottom' src={discountBg} alt="" />
            <div className='absolute left-[30%] top-[30%]'>
                <h2 className='font-bold text-4xl'>Get <span className='text-yellow-500'>20%</span> Off Discount Coupon</h2>
                <p className='font-semibold mt-2 mb-5 text-xl text-center text-gray-600'>by Subscribe our Newsletter</p>
                <form className='flex items-center' action="">
                    <input className='border overflow-hidden py-4 w-96 px-5 border-gray-300' placeholder='EMAIL ADDRESS' type="text" />
                    <button className='px-4 font-semibold py-4 bg-yellow-500' type='submit'>Get the Coupon</button>
                </form>
            </div>
        </div>
    );
};

export default Discount;