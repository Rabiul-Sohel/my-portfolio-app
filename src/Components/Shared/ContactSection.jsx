'use client'
import React from 'react';
import SectionTitle from './SectionTitle';
import { FaEnvelope, FaUserClock, FaUserTie } from 'react-icons/fa6';
import { motion, } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    const [ref2, inView2] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    const [ref3, inView3] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className='bg-deepBlue overflow-hidden px-5 py-16'>
            <div className='container mx-auto'>
                <SectionTitle title={'Get in Touch'} subTitle={'Are You Looking For Your Business Online Presence? I am here. 🙂'} />
                <div className='flex flex-col lg:flex-row  gap-5 py-8'>
                    <motion.div
                        ref={ref}
                        initial={{ x: -100, y: 100, opacity: 0 }}
                        animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2 }}
                        className='bg-deepBlue2 text-center spacey-y-1 p-4 flex-1 border border-basic
                    '>
                        <FaUserTie className='text-gold text-6xl mx-auto text-center' />
                        <h2 className='text-4xl font-semibold'>Rabiul Sohel</h2>
                        <h1 className='text-lg font-light'>Web Developer(MERN)</h1>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        initial={{ x: -100, opacity: 0 }}
                        animate={inView2 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2 }}
                        className='bg-deepBlue2 text-center space-y-1 p-4 flex-1 border border-basic'>
                        <FaUserClock className='text-gold text-6xl mx-auto text-center' />
                        <h2 className='text-4xl font-semibold'>Frelance</h2>
                        <h1 className='text-lg font-light'>Available Right Now</h1>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ x: 100, y:-100, opacity: 0 }}
                        animate={inView3 ? { x: 0, y:0, opacity: 1 } : {}}
                        transition={{ duration: 1.2 }}
                        className='bg-deepBlue2 text-center space-y-1 p-4 flex-1 border border-basic'>
                        <FaEnvelope className='text-gold text-6xl mx-auto text-center' />
                        <h2 className='text-4xl font-semibold'>Email</h2>
                        <h1 className='text-lg font-light'>rabiulsohel24@gmail.com</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;