import React from 'react';
import Banner from './Banner/Banner';
import Facility from '../Facility/Facility';
import GamerWorld from '../GamerWorld/GamerWorld';
import Brand from '../Brand/Brand';
import Campaign from '../Campaign/Campaign';
import TopProducts from '../TopProducts/TopProducts';
import BestSaller from '../BestSaller/BestSaller';
import Ads from '../Ads/Ads';
import PopularSales from '../PopularSales/PopularSales';
import NewArrivals from '../NewArrivals/NewArrivals';
import Popular from '../Popular/Popular';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <GamerWorld></GamerWorld>
            <Brand></Brand>
            <Campaign></Campaign>
            <TopProducts></TopProducts>
            <BestSaller></BestSaller>
            <Ads></Ads>
            <PopularSales></PopularSales>
            <NewArrivals></NewArrivals>
            <Popular></Popular>
        </div>
    );
};

export default Home;