import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Customlink from '../../../Utilities/Customlink';

const Footer = () => {
    return (
        <div className="primary-bg">


            <Container  >
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-3 mb-3">
                            <h5>About Us</h5>
                            <p>Leading Wood Work Tools in your region who provides premium quality of products</p>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>QuickLinks</h5>
                            <ul className="nav flex-column">
                                <Customlink to={'/'}>Home</Customlink>
                                <Customlink to={'/'}>Features</Customlink>
                                <Customlink to={'/'}>Pricing</Customlink>
                                <Customlink to={'/'}>FAQs</Customlink>
                                <Customlink to={'/'}>About</Customlink>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>SiteMap</h5>
                            <ul className="nav flex-column">
                                <Customlink to={'/'}>Home</Customlink>
                                <Customlink to={'/'}>Features</Customlink>
                                <Customlink to={'/'}>Pricing</Customlink>
                                <Customlink to={'/'}>FAQs</Customlink>
                                <Customlink to={'/'}>About</Customlink>
                            </ul>
                        </div>

                        <div className="col-md-3 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label  className="visually-hidden">Email address</label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <button className="btn btn-outlined-white" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="nav-link" href="/face">facebook</a></li>
                            <li className="ms-3"><a className="nav-link" href="/face">Twitter</a></li>
                            <li className="ms-3"><a className="nav-link" href="/face">Linkedin</a></li>
                        </ul>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;