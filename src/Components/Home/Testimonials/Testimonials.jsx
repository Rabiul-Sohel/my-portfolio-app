'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import clientPhoto from '@/assets/images/client.png'


// import '../Testimonials/style.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import SectionTitle from '@/Components/Shared/SectionTitle';


const Testimonials = () => {
    return (
        <div className='bg-deepBlue2 py-20 overflow-hidden '>
            <div className='container mx-auto min-h-screen'>
                <SectionTitle title={'Testimonials'} subTitle={'What are my client Saying?'} />
                <div className='py-20'>
                    <Swiper
                        className='min-h-[70vh] py-10'
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={true}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className=' flex justify-center min-h-[70vh] items-center '>
                                <div className=' space-y-10 w-3/4'>
                                    <div className='text-center'>
                                        <Image className='w-36 h-36 mx-auto rounded-full' width={400} height={400} src={clientPhoto} alt=' ' />
                                        <h4 className='text-xl text-gold font-semibold'>Adward J. Blink</h4>
                                        <h5>CEO, Subat Corp.</h5>
                                    </div>
                                    <p className='leading-7'>
                                        <span className='relative'><FaQuoteLeft className='absolute  text-gold -left-8 -top-5 text-3xl' /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt porro tempore maiores esse fuga nihil voluptates laboriosam commodi doloremque consectetur eius culpa reiciendis, assumenda, hic fugiat  <span className='relative'> <FaQuoteRight className='inline -top-2 absolute  text-gold text-3xl' /></span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' flex justify-center min-h-[70vh] items-center '>
                                <div className=' space-y-10 w-3/4'>
                                    <div className='text-center'>
                                        <Image className='w-36 h-36 mx-auto rounded-full' width={400} height={400} src={clientPhoto} alt=' ' />
                                        <h4 className='text-xl text-gold font-semibold'>Adward J. Blink</h4>
                                        <h5>CEO, Subat Corp.</h5>
                                    </div>
                                    <p className='leading-7'>
                                        <span className='relative'><FaQuoteLeft className='absolute  text-gold -left-8 -top-5 text-3xl' /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt porro tempore maiores esse fuga nihil voluptates laboriosam commodi doloremque consectetur eius culpa reiciendis, assumenda, hic fugiat suscipit enim eveniet eos non velit deleniti mollitia itaque architecto. Est dolorem quam nam error maxime quo quibusdam corporis. Dolores doloremque reiciendis cumque <span className='relative'> <FaQuoteRight className='inline -top-2 absolute  text-gold text-3xl' /></span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' flex justify-center min-h-[70vh] items-center '>
                                <div className=' space-y-10 w-3/4'>
                                    <div className='text-center'>
                                        <Image className='w-36 h-36 mx-auto rounded-full' width={400} height={400} src={clientPhoto} alt=' ' />
                                        <h4 className='text-xl text-gold font-semibold'>Adward J. Blink</h4>
                                        <h5>CEO, Subat Corp.</h5>
                                    </div>
                                    <p className='leading-7'>
                                        <span className='relative'><FaQuoteLeft className='absolute  text-gold -left-8 -top-5 text-3xl' /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt porro tempore maiores esse fuga nihil voluptates laboriosam commodi doloremque consectetur eius culpa reiciendis, assumenda, hic fugiat suscipit enim eveniet eos non velit deleniti mollitia itaque architecto. Est dolorem quam nam error maxime quo quibusdam corporis. Dolores doloremque reiciendis cumque <span className='relative'> <FaQuoteRight className='inline -top-2 absolute  text-gold text-3xl' /></span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' flex justify-center min-h-[70vh] items-center '>
                                <div className=' space-y-10 w-3/4'>
                                    <div className='text-center'>
                                        <Image className='w-36 h-36 mx-auto rounded-full' width={400} height={400} src={clientPhoto} alt=' ' />
                                        <h4 className='text-xl text-gold font-semibold'>Adward J. Blink</h4>
                                        <h5>CEO, Subat Corp.</h5>
                                    </div>
                                    <p className='leading-7'>
                                        <span className='relative'><FaQuoteLeft className='absolute  text-gold -left-8 -top-5 text-3xl' /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt porro tempore maiores esse fuga nihil voluptates laboriosam commodi doloremque consectetur eius culpa reiciendis, assumenda, hic fugiat suscipit enim eveniet eos non velit deleniti mollitia itaque architecto. Est dolorem quam nam error maxime quo quibusdam corporis. Dolores doloremque reiciendis cumque <span className='relative'> <FaQuoteRight className='inline -top-2 absolute  text-gold text-3xl' /></span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;