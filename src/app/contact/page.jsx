import MessageForm from '@/Components/ContactPage/MessageForm';
import React from 'react';

const ContactPage = () => {
    return (
        <div className='py-24 text-center overflow-hidden'>
            <div className='space-y-5 '>
                <h3 className="text-4xl lg:text-6xl inline  relative  font-semibold text-center after:content-['# ']  after:bg-gold uppercase">Get in Touch 
                    <span className="content-[''] border-2 border-gold w-1/2  left-0 bottom-0   absolute "></span>
                </h3>
                <p className='text-2xl text-basic'>Let's Talk about Ideas</p>
            </div>
            <MessageForm/>
        </div>
    );
};

export default ContactPage;