import React from 'react';
import Banner from './Banner/Banner';
import Facility from '../Facility/Facility';
import GamerWorld from '../GamerWorld/GamerWorld';
import Brand from '../Brand/Brand';
import Campaign from '../Campaign/Campaign';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facility></Facility>
            <GamerWorld></GamerWorld>
            <Brand></Brand>
            <Campaign></Campaign>
        </div>
    );
};

export default Home;