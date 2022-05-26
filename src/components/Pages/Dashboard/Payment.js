import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Templates/Loading';
import CheckoutFrom from './CheckoutFrom';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
// const stripePromise = loadStripe('pk_test_51L3HMhHcN3DnFNa2RCgHOiK77gqzu0hOB6oQnJseqXkty3bksizytYlltK3d6128PJh58kWCGeFr4iSPM6pm7r8L00wCxhPqMZ');

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery(['order', id], async () => await axios.get(`https://wwtools.herokuapp.com/order/${id}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }))

    if (isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <div className="shadow rounded">
                <Row>
                    <Col md={6}>
                        <div className="p-5 product-data">
                            <h2 className="text-2xl fw-bold text-secondary mb-3">Hello, {order?.data?.name}</h2>
                            <h2 className="card-title">Pay for: <span className="text-primary">{order?.data?.productName}</span> </h2>
                            <p className='fw-bold'>Quantity: {order?.data?.quantity}</p>
                            <p className='fw-bold'>Total Price: ${order?.data?.totalPrice}</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <div className="payment-card w-100">
                            <Elements stripe={stripePromise}>
                                <CheckoutFrom order={order?.data} />
                            </Elements>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Payment;