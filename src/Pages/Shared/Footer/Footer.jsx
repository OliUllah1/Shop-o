import React from 'react';
import logo from '../../../assets/images/footer/logo.svg';
import payment from '../../../assets/images/footer/payment-getways.png';
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='p-10'>
            <div className='flex items-center justify-center'>
                <img src={logo} alt="" />
            </div>
            <hr className='my-10' />
            <div className='grid grid-cols-4 gap-5'>
                <div className='w-full space-y-4'>
                    <h4 className='font-semibold text-lg'>About Us</h4>
                    <p className='text-gray-500'>We know there are a lot of threa developers our but we pride into <br /> a firm in the industry.</p>
                </div>
                <div className='w-full space-y-4 text-lg'>
                    <h4 className='font-semibold'>Feature</h4>
                    <ul className='text-gray-500 space-y-3'>
                        <li className='hover:underline'>About Us</li>
                        <li className='hover:underline'>Terms Condition</li>
                        <li className='hover:underline'>Best Products</li>
                    </ul>
                </div>
                <div className='w-full space-y-4 text-lg'>
                    <h4 className='font-semibold'>General Links</h4>
                    <ul className='text-gray-500 space-y-3'>
                        <li className='hover:underline'>Blog</li>
                        <li className='hover:underline'>Tracking Order</li>
                        <li className='hover:underline'>Become Seller</li>
                    </ul>
                </div>
                <div className='w-full space-y-4 text-lg'>
                    <h4 className='font-semibold'>Helpful</h4>
                    <ul className='text-gray-500 space-y-3'>
                        <li className='hover:underline'>Flash Sale</li>
                        <li className='hover:underline'>FAQ</li>
                        <li className='hover:underline'>Support</li>
                    </ul>
                </div>
            </div>
            <hr className='my-10' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <FaInstagram></FaInstagram>
                    <FaFacebookF></FaFacebookF>
                    <FaYoutube></FaYoutube>
                    <p>&copy;2023 oli ullah. All rights reserved.</p>
                </div>
                <img className='cursor-pointer' src={payment} alt="" />
            </div>
        </div>
    );
};

export default Footer;