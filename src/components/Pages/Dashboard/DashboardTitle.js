import React from 'react';

const DashboardTitle = (props) => {
    const {title,subtitle} = props;
    return (
        <div className='dashboard-header'>
                <h4 className="title">{title}</h4>
                <p className="discription">{subtitle}</p>
        </div>
    );
};

export default DashboardTitle;