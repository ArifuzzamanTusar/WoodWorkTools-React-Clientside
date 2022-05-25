import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import fetchApi from '../../../interceptor';
import Loading from '../../Templates/Loading';
import ReviewLoop from '../../Templates/ReviewLoop';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import "./Testimonial.css"



const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', async () => await fetchApi.get('/review'))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <Container>
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
                        reviews.data?.map((review, index) => <SwiperSlide  key={index} >  <ReviewLoop review={review}/>  </SwiperSlide>)
                    }
                </Swiper>
            </Container>


        </div>
    );
};

export default Reviews;