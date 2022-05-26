import axios from 'axios';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import SectionHeading from '../../Global/Pagecomponents/SectionHeading';
import Loading from '../../Templates/Loading';
import Productloop from '../../Templates/Productloop';

const Products = () => {
    const { data: products, isLoading } = useQuery('available', async () => await axios.get('https://wwtools.herokuapp.com/product?limit=4'));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <SectionHeading title='Popular Tools'></SectionHeading>
            <Container>
                <Row>
                    {
                        products?.data?.map((product, index) => <Productloop key={index} product={product} />)
                        // products.map(product => <Productloop key={product._id} product={product} />)
                    }
                </Row>
                <div className="more_button p-5 text-center">
                <Link className='btn btn-outlined' to='products'>See All Products </Link>
                </div>
            </Container>


        </div>
    );
};

export default Products;