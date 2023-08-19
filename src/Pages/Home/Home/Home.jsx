import React from 'react';
import Banner from './Banner/Banner';
import Facility from '../Facility/Facility';
import GamerWorld from '../GamerWorld/GamerWorld';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <GamerWorld></GamerWorld>
        </div>
    );
};

export default Home;