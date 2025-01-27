'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import formal from '@/assets/images/sohel-formal.png'
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa6';
import { RxCross1, RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import Social from './Social';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuShow, setMenuShow] = useState(false)
    


    // document.addEventListener('click', (event)=>{
    //     // event.stopPropagation();
    //     setMenuShow(false)
    // })


    const handleClick = () => {
        if (menuShow) {
            setMenuShow(false)
        }
    }
    // window.addEventListener('click', handleClick)



    useEffect(() => {
        const handleScoll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScoll)
        return () => {
            window.removeEventListener('scroll', handleScoll)
        }
    }, [])
    const pathName = usePathname()


    const navMenus = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About Me',
            path: '/about'
        },




        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    const navItems = navMenus.map((item, idx) => (
        <li className='relative' key={idx}>
            <Link  className={`${pathName === item.path ? 'text-gold' : 'text-white'}  text-center transition duration-300 group relative   hover:text-gold`} href={item.path}> {item.title}
            <span className={`${pathName === item.path ? 'w-1/2    ' : 'w-0 '} content-['']  group-hover:opacity-100  group-hover:w-1/2 transition-all duration-300 transform   border-gold left-0 border-b-2    -bottom-1   absolute `}></span>
            </Link>
            {/* {
                underline && <span className="content-[''] border-2 border-gold w-1/2  left-0 bottom-0   absolute "></span>
            } */}

        </li>
    ))
    return (
        <div className={`fixed  w-full top-0 py-1 duration-500 z-10 transition-all ${isScrolled ? 'bg-basic  animate-slideDown' : 'bg-transparent '}`}>
            <div className='flex  container mx-auto py-3 px-2  items-center justify-between'>
                <div className=''>

                    <Link className='font-bold text-2xl lg:text-3xl ' href='/'>rabiul<span className='text-gold'>Sohel</span> </Link>
                </div>
                <div className='lg:hidden relative '>
                    <button onClick={() => setMenuShow(!menuShow)}>
                        {
                            menuShow ? <RxCross2 className='text-2xl' /> : <FaBars className='text-2xl' />
                        }

                    </button>
                    {
                        menuShow && <ul className='flex w-28   flex-col absolute right-0 bg-basic p-3 border space-y-2 border-gold'>
                            {
                                navItems
                            }
                        </ul>
                    }
                </div>
                <ul className='hidden lg:flex  gap-8 uppercase'>
                    {
                        navItems
                    }
                </ul>
                <div className='hidden lg:flex'>
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Navbar;