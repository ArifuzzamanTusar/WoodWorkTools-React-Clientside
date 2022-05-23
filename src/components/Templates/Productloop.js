import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const Productloop = (product) => {
    const navigate = useNavigate();
    const { _id, name, image, price, description, quantity } = product;

    return (
        <Col md={4}>
     
            <div className="p-3 rounded shadow my-3">
                <Image className='img-fluid' src='https://res.cloudinary.com/tusar/image/upload/v1606723004/sample.jpg'></Image>
                <div className="content">
                    <div className="h3">Product Name</div>
                    <div className="d-flex">
                        <p className="price">Price 200tk</p>
                        
                    </div>
                    <p className="stock">Stock: 200pcs</p>
                    <p className="stock">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nostrum!</p>

                    <Button onClick={() => navigate(`/purchase/${_id}`)}  className='btn  btn-outlined col-12 ' >Buy Now</Button>

                </div>
            </div>
            </Col>
    );
};

export default Productloop;