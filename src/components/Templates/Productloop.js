import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Productloop.css';

const Productloop = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, image, price, description, quantity, minimumOrder } = product;

    return (
        <Col md={3}>

            <div className="p-3 rounded shadow my-3">
                <Image className='img-fluid' src={image}></Image>
                <div className="content">
                    <div className="h5 mt-3 fw-500 primary-text">{name}</div>
                    <div className="d-flex justify-content-between">
                        <p className="price ">Price: <strong>{price}</strong></p>
                        <p className="stock"> Stock: <strong>{quantity}</strong></p>
                    </div>
                    <p className="stock"> Minimum Order: <strong>{minimumOrder}</strong></p>
                    <div className="single-ploop-disc">
                        <p className="single-ploop-disc">{description.slice(0, 50)}...</p>

                    </div>

                    <Button onClick={() => navigate(`/purchase/${_id}`)} className='btn  btn-outlined col-12 ' >Buy Now</Button>

                </div>
            </div>
        </Col>
    );
};

export default Productloop;