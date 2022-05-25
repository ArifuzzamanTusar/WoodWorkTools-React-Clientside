import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Customlink from '../../../Utilities/Customlink';
import Loading from '../../Templates/Loading';


const Dashboardmenu = () => {
    const [user, isloading] = useAuthState(auth)
    const [role] = useAdmin(user);

    if (isloading) {
        return <Loading />
    }

    return (
        <>
            <Customlink to={'/dashboard/my-profile'}>My Profile</Customlink>

            {
                role === 'user' && <>
                 <Customlink to={'/dashboard/my-orders'}>My Orders</Customlink>
                 <Customlink to={'/dashboard/my-reviews'}>Add A Review</Customlink>
                 {/* <Customlink to={'my-orders'}>My Orders</Customlink> */}

                </>
            }
            {
                role === 'admin' && <>
                <Customlink to={'/dashboard/manage-orders'}>Manage All Orders</Customlink>
                <Customlink to={'/dashboard/manage-users'}>Make Admin</Customlink>
                <Customlink to={'/dashboard/add-product'}>Add Product</Customlink>
                <Customlink to={'/dashboard/manage-products'}>Manage Products</Customlink>

               

                </>
            }
        
        </>
    );
};

export default Dashboardmenu;