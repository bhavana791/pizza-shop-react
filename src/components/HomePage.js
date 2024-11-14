import React from 'react';

// import Hero from './components/Hero';
import About from './About';
import Menu from './Menu';
import Testimonials from './Testimonials';
import Contact from './Contact';
import LandingPage from './LandingPage';




const HomePage = () => {
    return (
        <div>
            
            <LandingPage/>
            <About />
            <Menu />
            
            <Testimonials />
            <Contact />
        </div>
    );
};

export default HomePage;
