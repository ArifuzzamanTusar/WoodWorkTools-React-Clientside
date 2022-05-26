import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboardmenu from './Dashboardmenu';
import './dashboard.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const DashboardSkeleton = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

    const avater = user.photoURL;
    const fallback = 'https://randomuser.me/api/portraits/men/34.jpg';

    return (
        <div className='dashboard-skeleton'>

            <div className="sidebar px-2">
                <div className="top-area">
                    <div className="before-menu py-1 text-center">
                        <div className="avater-box">
                            <img className='avater-image' width={100} src={avater ? avater : fallback} alt="" />
                        </div>
                        <div className="Logged-user py-3">
                            <h5>{user?.displayName}</h5>
                            
                        </div>
                    </div>
                    <hr />
                    <Dashboardmenu></Dashboardmenu>
                </div>

               


            </div>



            <div className="page-content p-5">
                {/* page content  */}
                {children}
            </div>




        </div>
    );
};

export default DashboardSkeleton;