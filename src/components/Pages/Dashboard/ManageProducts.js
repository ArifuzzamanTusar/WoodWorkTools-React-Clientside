import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Templates/Loading';
import DashboardTitle from './DashboardTitle';
import { BsTrash } from "react-icons/bs";
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import axios from 'axios';



const ManageProducts = () => {


    const { data: products, isLoading, refetch } = useQuery('products', async () => await axios.get('https://wwtools.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }));



    // Confirm delete 
    const handleProductDeleteConfirm = async (deleteProduct) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to delete " ${deleteProduct.name} "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                handleProductDelete(deleteProduct);
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }

    // Delete Products 
    const handleProductDelete = async (deleteProduct) => {
        console.log(deleteProduct._id);

        const { data } = await axios.delete(`https://wwtools.herokuapp.com/product/${deleteProduct._id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }

        );
        if (data.deletedCount) {
            toast.success('product deleted successfully ');
            refetch();

        }

    }


    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <DashboardTitle title='Manage Products' subtitle='Manage your products Here' ></DashboardTitle>

            <div className="table-parent">
                <Table responsive bordered hover>

                    <thead >
                        <tr>
                            <th>image</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Minimum Order</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.data?.map((product, index) => <tr key={index}>
                                <td>
                                    <div className="product-crud-image">
                                        <img width={50} src={product.image} alt="" />
                                    </div>
                                </td>
                                <td className='text-center'>{product.name}</td>
                                <td className='text-center'>${product.price}</td>
                                <td className='text-center'>{product.quantity}</td>
                                <td className='text-center'>{product.minimumOrder}</td>

                                <th className='text-center font-bold'>
                                    <Button onClick={() => handleProductDeleteConfirm(product)} className='btn  btn-danger'> <BsTrash /></Button>


                                </th>
                            </tr>)
                        }


                    </tbody>

                </Table >

            </div>

        </div>
    );
};

export default ManageProducts;