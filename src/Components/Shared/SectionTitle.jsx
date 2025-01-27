'use client'
import React from 'react';
import { motion, } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const SectionTitle = ({ title, subTitle }) => {
    const { ref, inView } = useInView({
        threshold: .2,
        triggerOnce: true

    })
    return (
        <motion.div
            ref={ref}
            className=' container mx-auto space-y-2 overflow-hidden text-center lg:text-left '
            initial={{ x: 200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
        >
            <h3 className='text-3xl inline lg:text-4xl  font-semibold uppercase relative'>{title}
                {/* <span className="content-[''] border-2 border-gold w-1/2  left-0 -bottom-1   absolute "></span> */}
            </h3>
            <p className='text-gold text-xl'> {subTitle} </p>
        </motion.div>
    );
};

export default SectionTitle;