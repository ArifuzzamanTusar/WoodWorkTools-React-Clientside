import React, { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Templates/Loading';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    let errorMessage = '';
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    const onSubmit = async (data) => {
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);

    }
    if (error) {
        errorMessage = <p className='p-2 text-center rounded-lg text-white bg-red-500'>{error?.message}</p>
    }

    if (loading) {
        return <Loading />
    }
    return (
        <Container>
            <div className="py-5 text-center">
                <h2> Login </h2>
            </div>
            <div className=" mb-5 form-area col-md-4 mx-auto p-5 shadow rounded">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                    message: 'Email is not valid'
                                }
                            }
                            )}
                            type="email"
                            placeholder="Your Email" />
                        {/* validation  */}
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer"
                                }
                            }
                            )}
                            type="password"
                            placeholder="Your Password" />

                        {/* validation  */}
                        <label className="label">
                            {errors.password?.type === 'required' && <span className=" text-danger">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                        </label>
                    </Form.Group>


                    <Button className='primary-btn col-12' type="submit">
                        Login
                    </Button>
                   
                    <div className="bg-danger my-2"> {errorMessage && errorMessage}</div>

                </Form>
                <div className="switch-log">
                    <p>Don't have an account? <Link to={'/register'}>Register Now</Link></p>
                </div>

                <GoogleLogin></GoogleLogin>
            </div>
        </Container>
    );
};

export default Login;