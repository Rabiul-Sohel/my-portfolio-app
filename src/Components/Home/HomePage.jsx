'use client'
import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Navbar from '../Shared/Navbar';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import ContactSection from '../Shared/ContactSection';
import Swal from 'sweetalert2';

const HomePage = () => {
    useEffect(()=>{
        Swal.fire({
 
  
  html: `
    <img style='height: 90vh;  border: 0' src='march.jpg'/>
  `,
  showCloseButton: true,
  showCancelButton: false,
 showConfirmButton:false
  
  
});
    },[])
    return (
        <div className=''>
            <Banner/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <ContactSection/>
        </div>
    );
};

export default HomePage;