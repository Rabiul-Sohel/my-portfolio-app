'use client'
import SectionTitle from '@/Components/Shared/SectionTitle';
import { IoLogoFigma } from "react-icons/io5";
import { FaArrowRight, FaLaptopCode, FaWordpressSimple } from "react-icons/fa6";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const  [ref, inView ] = useInView({
        threshold: .2,
        triggerOnce: true
    })
    const [ ref2, inView2]  = useInView({
        threshold: .2,
        triggerOnce: true
    })
    const  [ref3, inView3]  = useInView({
        threshold: .2,
        triggerOnce: true
    })
    return (
        <div className='min-h-screen bg-deepBlue2 py-5 lg:py-20 px-2 overflow-hidden'>
            <div className='container mx-auto'>
                <SectionTitle title={'My Services'}  subTitle={'What I Do'} />
                <div className='mt-10 flex flex-col lg:flex-row gap-7'>

                    <motion.div
                        ref={ref}
                        initial={{ x: 200, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 }: {}}
                        transition={{ duration: 1 }}
                        className='border border-basic text-center p-5 lg:p-8  space-y-4 flex-1'>
                        <IoLogoFigma className='text-7xl text-gold mx-auto' />
                        <h2 className='text-xl lg:text-2xl font-semibold uppercase'>Design Skills</h2>
                        <p className='text-justify'>Skilled in Figma, Photoshop, and Illustrator, I craft intuitive UI/UX designs and engaging visuals. My designs focus on creativity, functionality, and brand alignment, delivering user-centered solutions that elevate digital experiences and ensure a strong visual impact across platforms.</p>
                        <div className='pt-5'>
                            <Link href='/contact' className=' text-gold border-basic  hover:text-basic hover:bg-white transition duration-300  border px-4 py-2'>
                                Say Hello

                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView2 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.3 }}
                        className='border border-basic text-center p-5 lg:p-8  space-y-5 flex-1'>
                        <FaLaptopCode className='text-7xl text-gold mx-auto' />
                        <h2 className='text-xl lg:text-2xl font-semibold uppercase'>MERN Developer</h2>
                        <p className='text-justify'>As a MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I focus on clean code, efficient performance, and seamless user experiences, delivering scalable solutions tailored to meet modern web development needs.</p>
                        <div className='pt-5'>
                            <Link href='/contact' className=' text-gold  hover:text-basic hover:bg-white transition duration-300 border-basic border px-4 py-2'>
                                Say Hello

                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView3 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.6 }}
                        className='p-5 lg:p-8 border border-basic text-center space-y-5 flex-1'>
                        <FaWordpressSimple className='text-7xl mx-auto text-gold' />
                        <h2 className='text-xl lg:text-2xl font-semibold uppercase'>Wordpress Developer</h2>
                        <p className='text-justify'>I create responsive and user-friendly websites, focusing on custom themes, plugins, and seamless functionality. I prioritize clean design, performance optimization, and user experience, delivering tailored solutions that align with clients’ goals and enhance their online presence.</p>
                        <div className='pt-5'>
                            <Link href='/contact' className=' text-gold  hover:text-basic hover:bg-white transition duration-300 border-basic border px-4 py-2'>
                                Say Hello

                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Services;