import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Templates/Loading';
import ReviewLoop from '../../Templates/ReviewLoop';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import "./Testimonial.css"
import SectionHeading from '../../Global/Pagecomponents/SectionHeading';
import axios from 'axios';



const Reviews = () => {
    const { data: reviews, isLoading  } = useQuery('reviews', async () => await axios.get('https://wwtools.herokuapp.com/review'))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <SectionHeading title='Testimonials' subtitle='what out clients say about out products and services'></SectionHeading>
            <Container>
                <div className="pb-5">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            reviews.data?.map((review, index) => <SwiperSlide key={index} >  <ReviewLoop review={review} />  </SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </Container>


        </div>
    );
};

export default Reviews;