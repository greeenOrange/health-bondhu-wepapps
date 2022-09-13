import React from 'react';
import Experiance from '../Experiance/Experiance';
import FAQ from '../FAQ/FAQ';
import HospitalFeature from '../HospitalFeature/HospitalFeature';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
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
        </div>
        
    );
};

export default Home;