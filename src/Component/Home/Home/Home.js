import React from 'react';
import Banner from '../Banner/Banner';
import Alexa from '../Alexa/Alexa';
import HotDeals from '../HotDeals/HotDeals';
import SearchItems from '../SearchItems/SearchItems';
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Alexa></Alexa>
            <HotDeals></HotDeals>
            <SearchItems></SearchItems>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;