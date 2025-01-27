'use client'
import Image from 'next/image';
import React from 'react';
import formalImage from '@/assets/images/sohel-formal.png'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import Counter from '@/Components/Shared/Counter';
import Link from 'next/link';

const AbbBanner = () => {
    return (
        <div className='container px-2 overflow-hidden mx-auto flex flex-col lg:flex-row py-16'>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/3 '>
                <Image alt='Rabiul Alam Sohel' src={formalImage} className=' bg-gold' />
            </motion.div>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-2/3 bg-white text-deepBlue p-4 lg:p-10 flex items-center  '>
                <div className='space-y-4 lg:space-y-10'>
                    <div>
                        <h2 className='text-3xl lg:text-5xl  font-bold'>Rabiul Sohel</h2>
                        <h1 className='text-gold font-semibold  lg:text-xl'>Web Developer(MERN)</h1>
                    </div>
                    <p className='text-left'>I am a passionate MERN stack developer with expertise in building dynamic and responsive web applications. My journey in web development has been fueled by curiosity and a drive to create user-friendly digital experiences. Currently, I am expanding my skill set by diving into Next.js, enhancing my ability to build modern, performant websites and applications. I enjoy transforming ideas into functional code, focusing on clean design and seamless user interactions. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I am committed to delivering innovative solutions that meet client needs and stand out in today’s fast-paced tech landscape.</p>

                    <div>
                        <Link href='/contact' className='bg-gold text-white px-8 py-2 hover:bg-deepBlue2 transition duration-300 border border-basic'>Contact</Link>
                    </div>
                </div>

                {/* <Counter /> */}
            </motion.div>

        </div>
    );
};

export default AbbBanner;