import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import fetchApi from '../../../interceptor';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_UPLOAD_KEY}`;
        const url = `https://api.imgbb.com/1/upload?key=1068ae3bbbbc4b109a20ef0718268f86`;
        const { data: result } = await axios.post(url, formData);
        if (result) {
            const imageUrl = result.data.url;
            const product = {
                name: data.name,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                minimumOrder: data.minimumOrder,
                image: imageUrl
            }

            const { data: response } = await fetchApi.post('/product', product);
            if (response.insertedId) {
                toast.success('product uploaded successfully')
            } else {
                toast.error('something error happend')
            }
            reset();
        }

    }

    return (
        <Container>
            <div className="py-5 text-center">
                <h2> Login </h2>
            </div>
            <div className=" mb-5 form-area col-md-4 mx-auto p-5 shadow rounded">
                <Form onSubmit={handleSubmit(onSubmit)}>

                    {/* =========== Product Name ================= */}
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                            }
                            )}
                            type="text"
                            placeholder="Product Name" />
                        {/* validation  */}
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </Form.Group>
                    {/* =========== Discription ================= */}
                    <Form.Group className="mb-1" controlId="formGroupPassword">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },
                            }
                            )}
                            type="text"
                            placeholder="Product Description" />

                        {/* validation  */}
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </Form.Group>
                    {/* =========== Product PRICE ================= */}
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },
                            }
                            )}
                            type="number"
                            placeholder="Product Price"
                            min={1} />
                        {/* validation  */}
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </Form.Group>
                    {/* =========== Product Minimum Order Quantity ================= */}
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Minimum Order Quantity</Form.Label>
                        <Form.Control
                            {...register("minimumOrder", {
                                required: {
                                    value: true,
                                    message: 'minimumOrder is Required'
                                },
                            }
                            )}
                            type="number"
                            placeholder=" minimum Order quantity"
                            min={50} />
                        {/* validation  */}
                        <label className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                        </label>


                    </Form.Group>
                    {/* =========== Product Image ================= */}
                    <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                },

                            }
                            )}
                            type="file"
                            placeholder="Image" />
                        {/* validation  */}
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>


                    </Form.Group>


                    <Button className='primary-btn col-12' type="submit">
                        Add Product
                    </Button>



                </Form>

            </div>
        </Container>
    );
};

export default AddProduct;