import React from 'react';
import { Pagination , Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css"
import Slides from './Slides';

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
            title: "Vivamus magna justo, lacinia eget consectet",
            subtitle: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.blandit.",
            button: "button-text",
            button_url: "#button-url",
            image: "https://res.cloudinary.com/tusar/image/upload/v1606723004/sample.jpg"

        },
        {
            _id: 2,
            title: "Curabitur aliquet quam id dui posuere blandit.",
            subtitle: "Donec rutrum congue leo eget malesuada. Curabitur aliquet quam idPraesent sapien massa, convallis a pellentesque nec, egestas non nisi.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. dui posuere blandit.",
            button: "button-text",
            button_url: "#button-url",
            image: "https://res.cloudinary.com/tusar/image/upload/v1606723004/sample.jpg"

        },
        {
            _id: 3,
            title: "Praesent sapien massa, convallis a pellentesq",
            subtitle: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convalliPraesent sapien massa, convallis a pellentesque nec, egestas non nisi.s at tellus.",
            button: "button-text",
            button_url: "#button-url",
            image: "https://res.cloudinary.com/tusar/image/upload/v1606723004/sample.jpg"

        }
    ]
    return (

        <>
            <Swiper
                pagination={pagination}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    slide_content.map(slide =>  
                    <SwiperSlide key={slide._id}> 
                        <Slides title = {slide.title}   subtitle = {slide.title}  link = {slide.button_url}  btnText = {slide.button}  img = {slide.image}></Slides> 
                    </SwiperSlide> )
                }
                
                
            </Swiper>
        </>

    );
};

export default Hero;