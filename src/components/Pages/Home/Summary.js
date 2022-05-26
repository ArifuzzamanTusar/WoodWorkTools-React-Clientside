import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeading from '../../Global/Pagecomponents/SectionHeading';
import './Summery.css';
import { FaUsers , FaMoneyCheckAlt } from "react-icons/fa";
import { VscFeedback, VscTools } from "react-icons/vsc";

const Summary = () => {
    return (
        <div>
            <SectionHeading title="TRUSTED BUSSINESS WORLDWIDE" subtitle="Wood Work Tools provides premium quality of tools and instruments over the world that counts about"></SectionHeading>
            <Container className='py-5'>
                <Row>
                    <Col md="3">
                        <div className="counter-body my-2">
                            <div className="text-center">
                                <div className="counter-icon "> <div className="icon mx-auto"><FaUsers /></div></div>
                                <div className="counter-count fw-bold py-3"><h3>100+ </h3></div>
                                <div className="counter-about"><p>Happy Customers</p> </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="counter-body  my-2">
                            <div className="text-center">
                                <div className="counter-icon "> <div className="icon mx-auto"><FaMoneyCheckAlt /></div></div>
                                <div className="counter-count fw-bold py-3"><h3> 120M+</h3></div>
                                <div className="counter-about"><p>Annual revenue</p> </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="counter-body  my-2">
                            <div className="text-center">
                                <div className="counter-icon "> <div className="icon mx-auto"><VscFeedback /></div></div>
                                <div className="counter-count fw-bold py-3"><h3>33K+</h3></div>
                                <div className="counter-about"><p>Reviews</p> </div>
                            </div>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="counter-body  my-2">
                            <div className="text-center">
                                <div className="counter-icon "> <div className="icon mx-auto"><VscTools /></div></div>
                                <div className="counter-count fw-bold py-3"><h3>50+</h3></div>
                                <div className="counter-about"><p>tools</p> </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="py-5"></div>
            </Container>
        </div>
    );
};

export default Summary;