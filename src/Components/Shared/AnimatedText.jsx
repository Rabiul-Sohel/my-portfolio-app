'use client'
import React, { useEffect, useState } from 'react';

const AnimatedText = ({texts, interval = 100, pauseBetweenTexts = 1000}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        let currentText = texts[currentTextIndex];
        const timer = setInterval(()=>{
            if(index < currentText.length){
                setDisplayText(currentText.slice(0, index + 1))
                setIndex((prevIndex)=> prevIndex + 1)
            } else {
                clearInterval(timer)
                setTimeout(()=> {
                    setDisplayText('')
                    setIndex(0)
                    setCurrentTextIndex((prev)=> (prev + 1) % texts.length)
                    
                }, pauseBetweenTexts)
            }
           
                // setDisplayText((prev)=> {
                //     // const nextText = text.slice(0, index + 1)
                //     if(index < currentText.length){
                //         setIndex(0)
                //         return ''
                //     } else {
                //         setIndex((prevIndex)=> prevIndex + 1)
                //     }
                //     return nextText
                // })
                
            
        }, interval,)
        return ()=> clearInterval(timer)
    },[texts, interval, index, pauseBetweenTexts])
    return (
        <div className=' text-gold'>
           {displayText} 
           <span className='animate-pulse '>|</span>
        </div>
    );
};

export default AnimatedText;