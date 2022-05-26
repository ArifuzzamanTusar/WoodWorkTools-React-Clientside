import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className=" py-5 image">
                            <div className="form-body rounded shadow-lg p-5">
                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="Full Name" placeholder="I.e Jogn Doe" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="i.e info@wwc.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="your Message here" />
                                    </Form.Group>
                                    <Button className='primary-btn col-12' type="submit">
                                        Send Your Query
                                    </Button>

                                </Form>

                            </div>

                        </div>
                    </Col>
                    <Col md={6} className="py-5 d-flex align-items-center">

                        <div className="about-inner section-title">
                            <h2 className="heading-title-text"> Contact Us </h2>
                            <div className="divider my-3"> </div>
                            <div className="contact-iconlist">
                                <div className="py-2 d-flex"><div className="contact-icon"><FaMapMarkerAlt/> </div> <div className="contact-text px-3">Rajshahi Bangladesh</div></div>
                                <div className="py-2 d-flex"><div className="contact-icon"><FaEnvelope/> </div> <div className="contact-text px-3 "> <a className='text-dark' href="mailto:info@arifuzzamantusar.com">info@wwtools.com</a></div></div>
                                <div className="py-2 d-flex"><div className="contact-icon"><FaPhoneAlt/> </div> <div className="contact-text px-3">+880 1713 644570</div></div>
                                <div className="py-2 d-flex"><div className="contact-icon"><FaClock/> </div> <div className="contact-text px-3">8AM to 10PM</div></div>
                            </div>
                            <Link className='my-5 btn btn-outlined' to='/about'> Our Branch Location </Link>

                        </div>


                    </Col>

                </Row>
            </Container>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3218843189743!2d88.58924551535242!3d24.370103470735767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefc6cb44ee23%3A0xfb2a2c31aad2e5f8!2sArifuzzaman%20Tusar!5e0!3m2!1sen!2sbd!4v1653536320953!5m2!1sen!2sbd"
                    width="100%"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    tabIndex="0">

                </iframe>
            </div>
        </div>
    );
};

export default Contact;
