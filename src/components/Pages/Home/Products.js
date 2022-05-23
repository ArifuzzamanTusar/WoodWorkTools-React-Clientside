import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Productloop from '../../Templates/Productloop';

const Products = () => {

    const products = [
        {
            _id: 1,
        },
        {
            _id: 2,
        },
        {
            _id: 3,
        },
        {
            _id: 4,
        }

    ]
    return (
        <div>
            <Container>
                <Row>
                    {
                        products.map(product => <Productloop key={product._id} product={product} />)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Products;