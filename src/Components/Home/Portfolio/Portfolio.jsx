'use client'
import SectionTitle from '@/Components/Shared/SectionTitle';
import { IoLogoFigma } from "react-icons/io5";
import { FaArrowRight, FaLaptopCode, FaWordpressSimple } from "react-icons/fa6";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import batikrom from '@/assets/images/batikrom.png'
import bistroBoss from '@/assets/images/bistro-boss.png'
import carDoctor from '@/assets/images/car-doctor.png'

const Portfolio = () => {
     const [ref, inView]  = useInView({
            threshold: .1,
            triggerOnce: true
        })
        const  [ref2, inView2]  = useInView({
            threshold: .1,
            triggerOnce: true
        })
        const [ref3, inView3]  = useInView({
            threshold: .1,
            triggerOnce: true
        }) 
    return (
        <div className='bg-deepBlue py-20 px-2 overflow-hidden'>
           <div className='container mx-auto '>
                <SectionTitle title={'Portfolio'} subTitle={'My Cases'} />
                <div className='mt-10 flex flex-col lg:flex-row gap-7'>

                    <motion.div
                        ref={ref}
                        initial={{ x: -100, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 }: {}}
                        transition={{ duration: 1 }}
                        className='border border-basic bg-deepBlue2 p-8  space-y-4 flex-1'>
                        <Image src={batikrom} alt='html demo'/>
                        <h2 className='text-2xl font-semibold uppercase text-gold'>HTML</h2>
                        <p>Figma to html Development</p>
                        <div className=''>
                            <a href='https://betikrom-pathshala.netlify.app/' className=' flex items-center gap-2   hover:text-basic transition duration-300  '>
                                See Project 
                                <FaArrowRight className='text-xl text-gold' />

                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        initial={{ y: 200, opacity: 0 }}
                        animate={inView2 ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                        className='border border-basic bg-deepBlue2 p-8  space-y-4 flex-1'>
                       <Image src={bistroBoss} alt='Rect demo'/>
                       <h2 className='text-2xl font-semibold uppercase text-gold'>React js</h2>
                        <p>Responsive Web Application using React Js</p>
                        <div className=''>
                            <a href='https://bistro-boss-97bb5.web.app/' className=' flex items-center gap-2   hover:text-basic transition duration-300  '>
                                See Project 
                                <FaArrowRight className='text-xl text-gold' />

                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView3 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                        className=' p-8 border border-basic bg-deepBlue2 space-y-4 flex-1'>
                       <Image className='' src={carDoctor} alt='Next demo'/>
                       <h2 className='text-2xl font-semibold uppercase text-gold'>Next Js</h2>
                        <p>Figma to NextJs Development</p>
                        <div className=''>
                            <a href='https://car-doctor-pro-xi.vercel.app/' className=' flex items-center gap-2   hover:text-basic transition duration-300  '>
                                See Project 
                                <FaArrowRight className='text-xl text-gold' />

                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
            
        </div>
    );
};

export default Portfolio;