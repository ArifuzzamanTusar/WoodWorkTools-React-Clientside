import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Templates/Loading';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    let errorMessage = "";
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            signOut(auth);
            navigate('/login');
        }
    }, [user, navigate])

    if (error || updateError) {
        errorMessage = <p className='p-2 text-center rounded-lg text-white bg-red-500'>{error?.message || updateError?.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    if (loading || updating) {
        return <Loading />
    }
    return (
        <Container>
            <div className="py-5 text-center">
                <h2> Create an account </h2>
            </div>
            <div className=" mb-5 form-area col-md-4 mx-auto p-5 shadow rounded">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-1" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            }
                            )}
                            type="text"
                            placeholder="Your Name" />

                        {/* ------------ validation message----------  */}
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-danger">{errors.name.message}</span>}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                    message: 'Valid Email is needed'
                                }
                            }
                            )}
                            type="email"
                            placeholder="Your Email" />
                        {/* ------------ validation message----------  */}
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
                        {/* ------------ validation message----------  */}
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                        </label>
                    </Form.Group>


                    <Button className='primary-btn col-12' type="submit">
                        Create Account
                    </Button>
                    {/* error message show */}
                    {
                        errorMessage && errorMessage
                    }
                </Form>
                <div className="switch-log">
                    <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                </div>

                <GoogleLogin></GoogleLogin>
            </div>
        </Container>
    );
};

export default Register;