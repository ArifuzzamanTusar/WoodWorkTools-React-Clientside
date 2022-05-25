import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import fetchApi from '../../../interceptor';
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
        const { data } = await fetchApi.post('/review', review);

        if (data?.insertedId) {
            console.log(data);
            toast.success('Review submitted successfully.');
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
                                    <option value={5.0} selected>5.0</option>
                                    <option value={4.5}>4.5</option>
                                    <option value={4.0}>4.0</option>
                                    <option value={3.5}>3.5</option>
                                    <option value={3.0}>3.0</option>
                                    <option value={2.5}>2.5</option>
                                    <option value={2.0}>2.0</option>
                                    <option value={1.5}>1.5</option>
                                    <option value={1.0}>1.0</option>
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