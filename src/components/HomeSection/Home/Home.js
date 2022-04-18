import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Services/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default Home;