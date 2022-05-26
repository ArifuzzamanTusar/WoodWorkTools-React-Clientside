import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className="py-5 d-flex justify-content-center align-items-center">
                <Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
            </div>
        </div>
    );
};

export default Loading;