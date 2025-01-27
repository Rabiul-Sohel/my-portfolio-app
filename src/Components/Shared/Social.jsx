import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookF, FaGithub, FaLinkedin, FaLinkedinIn, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';

const Social = () => {
    return (
        <div className='flex items-center gap-4  p-2 '>
            <a className='' href="https://github.com/Rabiul-Sohel">
                <FaGithub className=' text-2xl hover:text-gold transition duration-300 ' />
            </a>
            <a className='' href="https://www.linkedin.com/in/rabiul-alam-sohel-7b7725251/">
                <FaLinkedin className=' text-2xl hover:text-gold transition duration-300 ' />
            </a>
            <a className='' href="https://x.com/home">
                <FaSquareXTwitter className=' text-2xl hover:text-gold transition duration-300 ' />
            </a>
            <a className='' href="https://www.instagram.com/rabiul_sohel/">
                <FaInstagramSquare className=' text-2xl hover:text-gold transition duration-300 ' />
            </a>


           
        </div>
    );
};

export default Social;