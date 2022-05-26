import React from 'react';
import './PageHeader.css'

const PageHeader = (props) => {
    const { title, subtitle } = props;
    return (
        <div className='bg-light pagetitle'>
            <div className="inner text-center">
                <h2 className="heading-title-text">{title}</h2>
                {
                    subtitle ?
                        <p className="page-subtitle-text">{subtitle}</p>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default PageHeader;