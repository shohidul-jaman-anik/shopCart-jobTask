import React from 'react';
import Banner from '../Banner/Banner';
import Alexa from '../Alexa/Alexa';
import HotDeals from '../HotDeals/HotDeals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Alexa></Alexa>
            <HotDeals></HotDeals>
        </div>
    );
};

export default Home;