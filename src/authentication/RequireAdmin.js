import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Templates/Loading';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [role, isLoading] = useAdmin(user);
    if (loading || isLoading) {
        return <Loading />
    }

    if (role !== 'admin') {
        toast.error('Need Admin to access the page')
        return <Navigate to='/'></Navigate>
    }
    return <Outlet />;
};

export default RequireAdmin;