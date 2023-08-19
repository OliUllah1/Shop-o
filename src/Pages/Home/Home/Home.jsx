import React from 'react';
import Banner from './Banner/Banner';
import Facility from '../Facility/Facility';
import GamerWorld from '../GamerWorld/GamerWorld';
import Brand from '../Brand/Brand';
import Campaign from '../Campaign/Campaign';
import TopProducts from '../TopProducts/TopProducts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <GamerWorld></GamerWorld>
            <Brand></Brand>
            <Campaign></Campaign>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;