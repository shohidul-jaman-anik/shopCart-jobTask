import React from 'react';
import Banner from '../Banner/Banner';
import Alexa from '../Alexa/Alexa';
import HotDeals from '../HotDeals/HotDeals';
import SearchItems from '../SearchItems/SearchItems';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Furnitures from '../Furnitures/Furnitures';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Alexa></Alexa>
            <HotDeals></HotDeals>
            <SearchItems></SearchItems>
            <SpecialOffer></SpecialOffer>
            <Furnitures></Furnitures>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;