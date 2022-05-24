import React from 'react';
import Customlink from '../../../Utilities/Customlink';


const Dashboardmenu = () => {
    return (
        <>
            <Customlink to={'my-orders'}>My Orders</Customlink>
            <Customlink to={'my-reviews'}>My Reviews</Customlink>
        </>
    );
};

export default Dashboardmenu;