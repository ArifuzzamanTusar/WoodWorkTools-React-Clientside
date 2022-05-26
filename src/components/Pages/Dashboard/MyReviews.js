import axios from 'axios';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Templates/Loading';

const MyReviews = () => {
    const [user, loading] = useAuthState(auth);

    const handleReview = async (event) => {
        event.preventDefault();
        const review = {
            name: user?.displayName,
            email: user?.email,
            rating: event.target.rating.value,
            description: event.target.review.value
        }
        const { data } = await axios.post('https://wwtools.herokuapp.com/review', review, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        });

        if (data?.insertedId) {
            toast.success('Review submitted successfully.');
            event.target.reset();
        }
    }

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            MyReviews
            <Row>
                <Col md={6}>

                    <div className="mb-5 w-100 col-md-6  p-5 shadow rounded">
                        <Form onSubmit={handleReview}>
                            <Form.Group>
                                <Form.Label>Your Rating</Form.Label>
                                <Form.Select name='rating'>
                                    <option defaultValue={5.0}>5.0</option>
                                    <option defaultValue={4.5}>4.5</option>
                                    <option defaultValue={4.0}>4.0</option>
                                    <option defaultValue={3.5}>3.5</option>
                                    <option defaultValue={3.0}>3.0</option>
                                    <option defaultValue={2.5}>2.5</option>
                                    <option defaultValue={2.0}>2.0</option>
                                    <option defaultValue={1.5}>1.5</option>
                                    <option defaultValue={1.0}>1.0</option>
                                </Form.Select>
                            </Form.Group>


                            <Form.Group>
                                <Form.Label>Your Review</Form.Label>
                                <Form.Control as="textarea" rows={3} name='review' placeholder='Your honest opinion..' required />
                            </Form.Group>

                            <div className="mt-5">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default MyReviews;