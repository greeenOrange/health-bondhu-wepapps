import React from 'react';
import Experiance from '../Experiance/Experiance';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import HospitalFeature from '../HospitalFeature/HospitalFeature';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';
// import Footer from '../Shared/Footer/Footer';
import './Home.css'


const Home = () => {
    return (
        <div>
    <div className='hero-section'>
            <Header />
            <Banner />
            <Services />
        </div>
        <Experiance />
        <HospitalFeature />
        <FAQ />
        <Testimonial />
        <Footer></Footer>
        </div>
        
    );
};

export default Home;