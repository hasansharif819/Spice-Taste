import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Inventories from './Inventory/Inventories';
import OurClient from './OurClient/OurClient';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <OurClient />
            <Carousel />
        </div>
    );
};

export default Home;