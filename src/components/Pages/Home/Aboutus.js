import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div className='bg-light py-5'>
            <Container>
                <Row>
                    <Col md={6} className="py-5 d-flex align-items-center">

                        <div className="about-inner section-title">
                            <h2 className="heading-title-text"> About Wood Work Tools Shop </h2>
                            <div className="divider my-3"> </div>
                            <p className="subtitle"> Wood Work Tools company provides lots of modern tools that need for every woodworkers. We provides premium quality of tools and instruments over the world that counts about lot of smiles. 

                            </p>
                            <Link className='btn btn-outlined' to='/about'> Learn More </Link>

                        </div>


                    </Col>
                    <Col md={6}>
                        <div className=" py-5 image">
                            <img className='img-fluid rounded shadow-lg' src="https://res.cloudinary.com/tusar/image/upload/v1653530688/wood-work-tools/503cfaedd6a7ec3a488e691fc4835258_m3rq7j.webp" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;