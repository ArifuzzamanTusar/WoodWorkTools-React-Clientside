import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slides = (props) => {
    const { title, subtitle, link, btnText, img } = props;
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col md={6}>
                        <div className=" slider-content d-flex align-items-center justify-content-center ">
                            <div className="slider-content-inner">
                                <h2 className='heading-title-text'>{title}</h2>
                                <p>{subtitle}</p>

                                <Link className='btn btn-outlined' to={link}>{btnText} </Link>
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <Image className='img-fluid' src={img}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Slides;