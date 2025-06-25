import React from 'react';
import Slider from './Slider';
import LatestQuery from './LatestQuery';
import WhyChooseUs from './WhyChooseUs';
import TrendingDiscussions from './TrendingDiscussions';

const Home = () => {
    return (
        <div>
            <Slider/>
            <LatestQuery/>
             <TrendingDiscussions/>
            <WhyChooseUs/>
           
        </div>
    );
};

export default Home;