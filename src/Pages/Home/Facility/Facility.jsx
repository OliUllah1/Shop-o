import React from 'react';
import delivery from '../../../assets/images/facility/free-delivery.png'
import returnProducts from '../../../assets/images/facility/delivery-status.png'
import creditedCard from '../../../assets/images/facility/credit-card.png'
import achievement from '../../../assets/images/facility/achievement.png'
const Facility = () => {
    return (
        <div  className='px-2 lg:px-10 py-5 bg-white grid grid-cols-4 gap-5'>
            <div className='flex items-center gap-3'>
                <img src={delivery} alt="" />
                <div>
                    <h4 className='font-bold'>Free Shipping</h4>
                    <p className='text-gray-500'>When ordering over $100</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={returnProducts} alt="" />
                <div>
                    <h4 className='font-bold'>Free Return</h4>
                    <p className='text-gray-500'>Get Return within 30 days</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={creditedCard} alt="" />
                <div>
                    <h4 className='font-bold'>Secure Payment</h4>
                    <p className='text-gray-500'>100% Secure Online Payment</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={achievement} alt="" />
                <div>
                    <h4 className='font-bold'>Best Quality</h4>
                    <p className='text-gray-500'>Original Product Guarenteed</p>
                </div>
            </div>
        </div>
    );
};

export default Facility;