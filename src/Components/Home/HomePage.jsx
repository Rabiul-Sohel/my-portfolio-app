import React from 'react';
import Banner from './Banner/Banner';
import Navbar from '../Shared/Navbar';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import ContactSection from '../Shared/ContactSection';

const HomePage = () => {
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