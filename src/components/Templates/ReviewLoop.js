import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './ReviewLoop.css';

const ReviewLoop = ({ review }) => {
    const { name, description, rating } = review;
    return (
        
            <div className="review_widget my-3">
                <Image width={50} className='quote_icon' src='https://res.cloudinary.com/tusar/image/upload/v1649022130/random-projects/quote_sazsw0.png'></Image>
                <div className="review_widget_inner">
                    <div className="d-flex align-items-center">
                        <Image className='avater' src="https://api.lorem.space/image/face?hash=55350"></Image>
                        <div className="name_review">
                            <h4 className='author'> {name}</h4>
                            <div className="deg">Customer, WoodWork Tools</div>
                        </div>

                    </div>
                    <p className="review-text py-3">
                        "{description.substring(0, 120)} ..."
                    </p>
                    <div className="rating">Rating: {rating} out of 5</div>
                </div>
            </div>

       

    );
};

export default ReviewLoop;