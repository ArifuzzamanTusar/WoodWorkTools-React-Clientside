import React from 'react';
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css"
import Slides from './Slides';

// import slide images 
import circulerSaw from '../../../assets/slider/circuler-saw.webp';
import miterSaw from '../../../assets/slider/miter-saw.webp';
import tableSaw from '../../../assets/slider/table-saw.webp';

const Hero = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };


    const slide_content = [
        {
            _id: 1,
            title: "Wood Work Tools's Miter Saw",
            subtitle: "15 Amp 10 in. Sliding Compound Exclusive Miter Saw comes with 10 Inches Blade Length, 36.19 x 22.82 x 16.92	Item Dimensions, Ac/dc Speed	4600 RPM  Power Source",
            button: "See Details",
            button_url: "/products",
            image: miterSaw

        },
        {
            _id: 2,
            title: "Powerful Circular Saw",
            subtitle: "Get the official Festool TS 75 EQ Plunge Cut Circular Saw with 75-Inch Track with 50 nummbers of sharp Teeths",
            button: "See Details",
            button_url: "/products",
            image: circulerSaw

        },
        {
            _id: 3,
            title: "Professional Table Saw",
            subtitle: "SAWSTOP 10-Inch Professional Cabinet Saw 3-HP, 36-Inch Professional TGlide Fence System (PCS31230-TGP236)",
            button: "See Details",
            button_url: "/products",
            image: tableSaw
        }
    ]
    return (
        <div className="hero">
            <>
                <Swiper
                    pagination={pagination}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        slide_content.map(slide =>
                            <SwiperSlide key={slide._id}>
                                <Slides title={slide.title} subtitle={slide.subtitle} link={slide.button_url} btnText={slide.button} img={slide.image}></Slides>
                            </SwiperSlide>)
                    }


                </Swiper>
            </>
        </div>



    );
};

export default Hero;