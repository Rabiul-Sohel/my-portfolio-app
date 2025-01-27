'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className=' flex gap-20  container mx-auto  text-white justify-center '>
            <div className=' w-60 flex justify-center border-2 animate-bounce-slow py-2   bg-basic  border-gold'>
                <div className='text-left'>
                    <h3 ref={ref} className='text-3xl font-bold  '>
                        {
                            inView ? <CountUp end={5} /> : 0
                        }
                        +</h3>
                    <p className='text-base'>Years of <br /> Experience</p>
                </div>
            </div>
            <div className='  w-60 flex justify-center items-center py-2  border-2 animate-bounce-reverse  bg-basic border-gold'>
                <div className='text-left'>
                    <div className=' text-3xl font-bold flex'>
                        {
                            inView ? <CountUp end={25} /> : 0
                        }

                        +
                    </div>
                    <p className='text-base'>Completed <br /> Projects</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;