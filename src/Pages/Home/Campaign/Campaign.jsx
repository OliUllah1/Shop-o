import React from 'react';
import countdown from '../../../assets/images/campaign/campaign-cover-countdown.jpg'
import download from '../../../assets/images/campaign/download-app-cover.png'
import playStore from '../../../assets/images/campaign/play-store.webp'
import appStore from '../../../assets/images/campaign/apple-store.webp'
import app from '../../../assets/images/campaign/app-screen.webp'
import { FaAngleRight } from "react-icons/fa";


const Campaign = () => {
    return (
        <div className='p-10 flex gap-10'>
            <div className='w-full relative'>
                <img className='w-full' src={countdown} alt="" />
                <div className='p-10 space-y-10 absolute top-0 left-0 w-full'>
                    <div className='grid mt-10 grid-cols-4 gap-10 text-center'>
                        <div className='space-y-1'>
                            <h3 className='w-24 h-24 rounded-full font-bold text-3xl text-red-600 bg-white flex items-center justify-center'>356</h3>
                            <h4 className='font-semibold text-xl text-black'>Days</h4>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='w-24 h-24 rounded-full font-bold text-3xl text-sky-600 bg-white flex items-center justify-center'>12</h3>
                            <h4 className='font-semibold text-xl text-black'>Hours</h4>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='w-24 h-24 rounded-full font-bold text-3xl text-green-600 bg-white flex items-center justify-center'>60</h3>
                            <h4 className='font-semibold text-xl text-black'>Minutes</h4>
                        </div>
                        <div className='space-y-1'>
                            <h3 className='w-24 h-24 rounded-full font-bold text-3xl text-pink-600 bg-white flex items-center justify-center'>60</h3>
                            <h4 className='font-semibold text-xl text-black'>Seconds</h4>
                        </div>
                    </div>
                    <h1 className='font-bold text-5xl'>WOO! Flash Sale</h1>

                    <button className='text-sm flex items-center gap-2 font-semibold py-2 border-b border-yellow-600'>Shop Now <FaAngleRight></FaAngleRight></button>
                </div>
            </div>
            <div className='w-full relative'>
                <img className='w-full' src={download} alt="" />
                <div className='absolute space-y-5 top-0 left-0 px-10 py-20'>
                    <h5 className=' font-bold'>MOBILE APP VERSION</h5>
                    <h1 className='font-bold text-4xl'>Get Our <span className='underline text-red-600'>Mobile App</span> <br className='hidden lg:block' /> It's Make easy for you life !</h1>
                    <div className='flex gap-5'>
                        <img className='h-[80px]' src={playStore} alt="" />
                        <img className='h-[80px]' src={appStore} alt="" />
                    </div>
                    <img src={app} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Campaign;