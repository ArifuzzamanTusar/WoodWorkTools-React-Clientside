import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    return (
        <Container>
            <div className="py-5 text-center">
                <h2> Login </h2>
            </div>
            <div className=" my-2 form-area col-md-4 mx-auto p-5 shadow rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='primary-btn col-12'  type="submit">
                        Login
                    </Button>
                </Form>

                <GoogleLogin></GoogleLogin>
            </div>
        </Container>
    );
};

export default Login;