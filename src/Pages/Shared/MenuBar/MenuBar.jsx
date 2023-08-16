import React from 'react';
import { FaAngleDown,FaRegHeart,FaRegUser,FaShoppingBag,FaUndo,FaAlignLeft,FaAngleRight } from "react-icons/fa";
import country from '../../../assets/images/menubar/country-logo-16x16.png'
import logo from '../../../assets/images/menubar/logo.svg';

const MenuBar = () => {
    return (
        <div className=''>
            <div className='flex lg:px-10 px-2 py-2 text-sm font-semibold justify-between items-center'>
                <ul className='flex gap-5 items-center'>
                    <li>Account</li>
                    <li>Track Order</li>
                    <li>Support</li>
                </ul>
                <ul className='flex gap-5 items-center'>
                    <li className='flex items-center gap-3'> <img src={country} alt="" /> United State<FaAngleDown></FaAngleDown></li>
                    <li className='flex items-center gap-5'>USD<FaAngleDown></FaAngleDown></li>
                    <li className='flex items-center gap-5'>Bangla<FaAngleDown></FaAngleDown></li>
                </ul>
            </div>
            <hr />
            <div className='flex px-2 lg:px-10 py-5 items-center justify-between'>
                <img src={logo} alt={logo} />
                <form className='w-full flex justify-center' action="">
                    <input className='border w-96 px-5 py-2' type="text" placeholder='Search Product...' />
                    <button className='bg-[#ffbb38] py-2 px-7 font-bold' type='submit'>Search</button>
                </form>
                <div className='flex items-center text-xl gap-5'>
                    <FaUndo></FaUndo>
                    <FaRegHeart></FaRegHeart>
                    <FaShoppingBag></FaShoppingBag>
                    <FaRegUser></FaRegUser>
                    
                    
                </div>
            </div>
            <hr />
            <div className='py-2 relative px-2 lg:px-10  bg-[#ffbb38]'>
                <div className=' flex items-center justify-between'>
                    <div className='w-[25%]'>
                        <button className='flex bg-white rounded-t absolute bottom-0 py-3 px-7 items-center gap-12 font-semibold  justify-between'>
                        <span className='flex items-center gap-3'><FaAlignLeft></FaAlignLeft> All Categories</span>
                        <FaAngleDown></FaAngleDown>
                        </button>
                        
                    </div>
                    <div className='w-[75%] flex items-center justify-between'>
                    <ul className='flex font-semibold items-center gap-10'>
                        <li>Home</li>
                        <li className='flex items-center gap-2'>Shop <FaAngleDown></FaAngleDown></li>
                        <li className='flex items-center gap-2'>Pages <FaAngleDown></FaAngleDown></li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <button className='py-3 font-semibold flex items-center gap-3 px-5 bg-black text-white'>Become a Seller <FaAngleRight></FaAngleRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;