'use client'
import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/images/banner.png'
import AnimatedText from '@/Components/Shared/AnimatedText';
import Counter from '@/Components/Shared/Counter';
import { motion } from 'framer-motion'

const Banner = () => {
    const texts = [ 'Web Developer', 'Web Designer']
    return (
        <div className='container mx-auto    overflow-hidden    '>
            <div className={`text-white flex gap-5 flex-col-reverse lg:flex-row  items-center py-10 min-h-screen `}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='  flex-1 space-y-4 px-2'>
                    <h3 className='text-xl lg:text-3xl'>Hello, My name</h3>
                    <h2 className='text-4xl lg:text-7xl font-bold uppercase'>Rabiul Sohel</h2>
                    <h1 className='lg:text-4xl text-2xl font-semibold flex gap-2 '>
                        I am
                        <AnimatedText interval={300} texts={texts} pauseBetweenTexts={2000} />
                    </h1>
                    {/* <h1 className='text-gold text-4xl font-semibold'>I am Web Developer</h1> */}
                    <p>Its my great opportunity to say you 'HELLO'. I am a front-end web developer based in cumilla, Bangladesh. I can create unique but aesthetic Web Application with my creative mind and experiences. Basically, I am MERN developer. I love to talk related to work and sharing thoughts.</p>

                </motion.div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='flex-1 flex justify-center lg:justify-end'>
                    <Image className='w-5/6 mx-auto top-0' src={bannerImg} alt='Rabiul Alam Sohel' />
                </motion.div>


            </div>
            <div className='   relative'>
                <div className='flex-1 relative lg:absolute left-2 -top-10 lg:-top-44' >
                    <button className='border mt-5 border-basic hover:bg-white hover:text-deepBlue transition duration-300 text-gold px-5 py-2 text-xl animate-[bounce_5s_ease-in-out_infinite]'>Say Hello</button>
                </div>
                <div className='relative lg:absolute right-0 bottom-8 lg:bottom-16'>
                    <Counter />
                </div>

            </div>
        </div>
    );
};

export default Banner;