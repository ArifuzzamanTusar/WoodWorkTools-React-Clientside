import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const Productloop = ({product}) => {
    const navigate = useNavigate();
    const { _id, name, image, price, description, quantity } = product;

    return (
        <Col md={3}>
     
            <div className="p-3 rounded shadow my-3">
                <Image className='img-fluid' src={image}></Image>
                <div className="content">
                    <div className="h3">{name}</div>
                    <div className="d-flex">
                        <p className="price">{price}</p>
                        
                    </div>
                    <p className="stock">{quantity}</p>
                    <p className="stock">{description.slice(0, 90)}...</p>

                    <Button onClick={() => navigate(`/purchase/${_id}`)}  className='btn  btn-outlined col-12 ' >Buy Now</Button>

                </div>
            </div>
            </Col>
    );
};

export default Productloop;