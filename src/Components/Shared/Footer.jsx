import React from 'react';
import Social from './Social';

const Footer = () => {
    return (
        <div className='bg-deepBlue2 py-5'>
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
                <Social />
                <p className=' text-center '>© All Rights Reserved 2022-2025 | Rabiul Sohel</p>
            </div>
        </div>
    );
};

export default Footer;