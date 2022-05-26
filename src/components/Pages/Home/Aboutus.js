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
                                <p className="subtitle"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem saepe ullam aspernatur voluptates reiciendis culpa sapiente consequatur, quaerat magni dolore numquam nisi, fugiat eius. Voluptatibus, repellendus. Aliquam maxime perspiciatis iure. Nihil debitis ex esse harum voluptas ut. Quasi, beatae sapiente necessitatibus numquam eveniet ratione amet explicabo nihil non error magnam.</p>
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