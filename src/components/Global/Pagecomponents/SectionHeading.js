import React from 'react';
import { Container } from 'react-bootstrap';
import './Sectiontitle.css'

const SectionHeading = (props) => {
    const { title, subtitle } = props;
    return (
        <Container>
            <div className="py-5 text-center section-title ">
                <h2 className="heading-title-text"> {title} </h2>
                <p className="subtitle"> {subtitle}</p>
                <div className="d-flex justify-content-center">
                    <div className="divider"> </div>
                </div>


            </div>
        </Container>
    );
};

export default SectionHeading;