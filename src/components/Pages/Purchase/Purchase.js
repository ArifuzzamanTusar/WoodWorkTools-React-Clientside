import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import fetchApi from '../../../interceptor';
import Loading from '../../Templates/Loading';

const Purchase = () => {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(0);


    const [user, loading] = useAuthState(auth);

    const { data: product, isLoading, refetch } = useQuery(['product', id], async () => await fetchApi.get(`/product/${id}`));

    useEffect(() => {
        if (product) {
            setQuantity(Number(product.data.minimumOrder))
        }
    }, [product])

    if (isLoading || loading) {
        return <Loading />
    }



    const handlePurchase = async (event) => {
        event.preventDefault();
        const purchaseQuantity = Number(event.target.quantity.value);

        const order = {
            email: user.email,
            name: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            productId: product.data._id,
            productName: product.data.name,
            quantity: purchaseQuantity,
            totalPrice: purchaseQuantity * Number(product.data.price),
            status: 'due',
            image: product.data.image
        }
        const { data } = await fetchApi.post('/order', order);
        if (data.insertedId) {

            const updateField = {
                quantity: Number(product.data.quantity) - purchaseQuantity,
            }
            const { data: response } = await fetchApi.put(`/product/${id}`, updateField)
            if (response) {
                refetch();
                toast.success('Order placed successfully')
                event.target.reset();
            }
        }
    }

    const handleIncrease = () => {
        const input = document.getElementById('quantity');
        const newValue = Number(input.value) + 1;
        input.value = newValue;
        setQuantity(newValue);
    }

    const handleDecrease = () => {
        const input = document.getElementById('quantity');
        const newValue = Number(input.value) - 1;
        input.value = newValue;
        setQuantity(newValue);
    }


    return (
        <Container className='py-5'>
            <Row>
                <Col md={6}>
                    <div className="product-wrapper">
                        <figure><img src={product?.data?.image} className="img-fluid" alt="" /></figure>

                    </div>
                </Col>
                <Col md={6}>
                    <div className="product-purchase p-5 shadow-sm">
                        <div className="">
                            <h2 className="card-title text-primary">{product?.data?.name}</h2>
                            <p className='font-bold'>Price Per Unit: ${product?.data?.price}</p>
                            <div className="d-flex ">
                                <p className='text-left'>Quantity: {product?.data?.quantity}</p>
                                <p className='text-left mx-4 '>Minimum Order Quantity: {product?.data?.minimumOrder}</p>
                            </div>

                            <p>{product?.data?.description}</p>
                        </div>

                        <div className="order-box">
                            <Form onSubmit={handlePurchase}>
                                {/* =========== Product Hidden fields ================= */}
                                <Form.Group >
                                    <Form.Control type="hidden" defaultValue={user?.displayName} />
                                    <Form.Control type="hidden" defaultValue={user?.email} />
                                </Form.Group>


                                {/* =========== Product Hidden fields ================= */}
                                <Form.Group className="mb-1" controlId="formGroupEmail">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name='address' placeholder='Your Address..' required />
                                </Form.Group>
                                {/* =========== Phone Numeber ================= */}
                                <Form.Group className="mb-5" controlId="formGroupEmail">
                                    <Form.Label>Your Phone Number</Form.Label>
                                    <Form.Control type='number' name='phone' placeholder='Your phone..'  required/>
                                </Form.Group>

                                {/* ============= QTY ============== */}
                                <Row >
                                    <Form.Label>Choose Quantity from {product?.data?.minimumOrder} to  {product?.data?.quantity}</Form.Label>
                                    <Col md={4}>

                                        <InputGroup className="mb-3"  >
                                            <Button onClick={handleDecrease} variant="outline-secondary"> - </Button>
                                            <FormControl type="number" defaultValue={Number(product?.data?.minimumOrder)} name='quantity' id='quantity' />
                                            <Button onClick={handleIncrease} variant="outline-secondary" >+</Button>
                                        </InputGroup>
                                    </Col>

                                </Row>



                                {
                                    (quantity < Number(product?.data?.minimumOrder)) && <span className='text-white bg-danger p-2 my-3'>Please order minimum {product?.data?.minimumOrder} </span>
                                }
                                {
                                    (quantity > Number(product?.data?.quantity)) && <span className='text-error'>maximum order range {product?.data?.quantity} </span>
                                }
                                <div className="py-3">
                                    <input type='submit' value={'Purchase'} className="btn btn-primary"
                                        disabled={quantity < Number(product?.data?.minimumOrder) || quantity > Number(product?.data?.quantity)}
                                    />
                                </div>

                            </Form>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Purchase;