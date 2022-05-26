import React from 'react';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Hero from './Hero';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
   
    return (
        <div>
            <Hero></Hero>
             <Products></Products>

             <Reviews></Reviews>
             <Summary></Summary>
             <Aboutus></Aboutus>
             <Contact></Contact>
        </div>
    );
};

export default Home;