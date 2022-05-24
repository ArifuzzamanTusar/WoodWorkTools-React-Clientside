import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Templates/Loading';

const GoogleLogin = () => {

    let errorMessage = '';
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])

    if (error) {
        errorMessage = <p className='p-2 text-center  text-white bg-danger'>{error?.message}</p>
    }

    if (loading) {
        return <Loading />
    }


    return (
        <div className='py-5'>
            {
                error && errorMessage
            }
            <button onClick={() => signInWithGoogle()} className='btn btn-outlined col-12 ' > Continue With Google</button>
        </div>
    );
};

export default GoogleLogin;