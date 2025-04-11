'use client'
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    

    useEffect(()=>{
        const toggleVisibility = () =>{
            if(window.scrollY > 300){
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
           
            return ()=>{
                window.removeEventListener('scroll', toggleVisibility)
            }
        
    },[])
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div >
            {
               isVisible && <button onClick={scrollTop} className='bg-gold px-2 flex items-center gap-1 py-2 border-2 z-50 border-lightBlue text-white animate-bounce' ><FaArrowUp className='text-xl' /> Top</button>
            }
        </div>
    );
};

export default ScrollTop;