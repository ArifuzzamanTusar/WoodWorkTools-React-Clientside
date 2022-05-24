import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboardmenu from './Dashboardmenu';
import './dashboard.css'

const DashboardSkeleton = ({ children }) => {


    const fallback = 'https://randomuser.me/api/portraits/men/34.jpg';

    return (
        <div className='dashboard-skeleton'>

            <div className="sidebar px-5">
                <div className="top-area">
                    <div className="before-menu text-center">
                        <div className="avater-box">
                            <img className='avater-image' width={100} src={fallback} alt="" />
                        </div>
                    </div>
                    <Dashboardmenu></Dashboardmenu>
                </div>

                <div className="bottom-area">
                    <div className="after-menu">
                        logout
                    </div>
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