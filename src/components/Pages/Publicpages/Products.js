import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import fetchApi from '../../../interceptor';
import PageHeader from '../../Global/Pagecomponents/PageHeader';
import Loading from '../../Templates/Loading';
import Productloop from '../../Templates/Productloop';

const Products = () => {
    // const { data: products, isLoading } = useQuery('available', async () => await fetchApi.get('/product?limit=3'));
    const { data: products, isLoading } = useQuery('available', async () => await fetchApi.get('/product'));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <PageHeader title="All Products" subtitle="All wood work tools"></PageHeader>
            <Container>
                <Row>
                    {
                        products?.data?.map((product, index) => <Productloop key={index} product={product} />)
                        // products.map(product => <Productloop key={product._id} product={product} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;