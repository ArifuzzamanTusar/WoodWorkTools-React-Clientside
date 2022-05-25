import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import fetchApi from '../../../interceptor';
import Loading from '../../Templates/Loading';
import DashboardTitle from './DashboardTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const MyOrders = () => {


    const [user, loading] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], async () => await fetchApi.get(`/order?email=${user?.email}`))

    if (loading || isLoading) {
        return <Loading />
    }


    // Confirm delete 
    const handleCancelOrderConfirm = async (order) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to delete " ${order.name} "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willConfirm) => {
            if (willConfirm) {
                handleCancelOrder(order)
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }


    const handleCancelOrder = async (order) => {
        const { data } = await fetchApi.delete(`/order/${order._id}`);
        if (data.deletedCount) {
            toast.success("Order Cancelled successfully..!");
            refetch();
        }
    }

    return (
        <div>
            <DashboardTitle title='Manage Users' subtitle='Delete or update users Role' ></DashboardTitle>
            <div className="table-data">
                <Table responsive bordered hover>
                    <thead >
                        <tr>
                            <th>Product image</th>
                            <th className='text-center'>Product Name</th>
                            <th className='text-center'>Customer</th>
                            <th className='text-center'>Address</th>
                            <th className='text-center'>Phone</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Payment Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.data?.map((order, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="product-image">
                                            <img width={50} src={order.image} alt="" />

                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>{order.productName}</td>
                                <td className='text-center'>{order.name}</td>
                                <td className='text-center'>{order.address}</td>
                                <td className='text-center'>{order.phone}</td>
                                <td className='text-center'>{order.quantity}</td>
                                <td className='text-center'>${order.totalPrice}</td>
                                <td className='text-center capitalize text-bold'>
                                    {
                                        order.status === 'due' && <small className='bg-danger text-white px-3 py-1 rounded-pill'>unpaid</small>
                                    }
                                    {
                                        order.status === 'pending' && <small className='bg-warning text-white  px-3 py-1 rounded-pill'>pending</small>
                                    }
                                    {
                                        order.status === 'paid' && <small className='bg-success text-white px-3 py-1 rounded-pill'>paid</small>
                                    }

                                </td>
                                <th className='text-center font-bold'>
                                    {
                                        order.status === 'due' && <>
                                            <Link to={`/dashboard/payment/${order._id}`} className="btn btn-success btn-sm mx-2">Pay Now</Link>

                                            <label onClick={() => handleCancelOrderConfirm(order)}  className="btn btn-sm btn-danger">Cancel</label>
                                        </>
                                    }
                                    {
                                        order.status === 'pending' && "pending confirm"
                                    }
                                    {
                                        order.status === 'paid' && <p>TxId: <small className="text-orange-600">{order?.transactionId}</small></p>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;