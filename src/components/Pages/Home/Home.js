import React from 'react';
import Aboutus from './Aboutus';
import Hero from './Hero';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
   
    return (
        <div>
            <Hero></Hero>
             <Products></Products>

             <Reviews></Reviews>
             <Aboutus></Aboutus>
        </div>
    );
};

export default Home;