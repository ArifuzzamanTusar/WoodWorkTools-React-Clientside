import React from 'react';
import { Container, Image } from 'react-bootstrap';
import notfound from '../../../assets/notfound.webp'

const Notfound = () => {
    return (
        <div>
                <Container >
                    <div className="pt-5 col-md-4 mx-auto">
                        <Image className='img-fluid' src={notfound}></Image>
                        <h3   className="text-center pb-5">Page Not Found</h3>
                    </div>
                </Container>
        </div>
    );
};

export default Notfound;    <Container ></Container>