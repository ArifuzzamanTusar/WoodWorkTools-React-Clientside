
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Loading from '../../Templates/Loading';
import DashboardTitle from './DashboardTitle';

const ManageOrders = () => {



    const { data: orders, isLoading, refetch } = useQuery('orders', async () => await axios.get('https://wwtools.herokuapp.com/order', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }));




    if (isLoading) {
        return <Loading />
    }


    // Confirm delete 
    const handleCancelConfirm = async (cancelOrder) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to CANCEL this order "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willCancel) => {
            if (willCancel) {
                handleCancelOrder(cancelOrder);
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }

    // Confirm delete 
    const handleConfirmConfirm = async (confirmOrder) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to delete " ${confirmOrder.name} "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willConfirm) => {
            if (willConfirm) {
                console.log(confirmOrder);
                handleConfirm(confirmOrder._id);
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }

    // ============ HANDLE FUNCTIONS ==========







    const handleCancelOrder = async (orderCancel) => {
        console.log(orderCancel._id);
        const { data } = await axios.delete(`https://wwtools.herokuapp.com/order/${orderCancel._id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }
        );
        if (data.deletedCount) {
            toast.success("Order Cancel successfully..!");
            refetch();
        }
    }


    const handleConfirm = async (id) => {
        console.log(id);
        const accept = {
            status: 'paid'
        }

        const { data } = await axios.put(`https://wwtools.herokuapp.com/order/accept/${id}`, accept, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }
        );
        if (data.acknowledged) {
            toast.success("Order Payment Accepted")
            refetch()
        }

    }

    return (
        <div>
            <DashboardTitle title='Manage Orders' subtitle='Manage all orders Here' ></DashboardTitle>
            <div className="table-data">
                <div className="table-parent ">
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
                                    <td className='text-center'>
                                        {
                                            order.status === 'due' ? "unpaid" : order.status
                                        }

                                    </td>
                                    <th className='text-center text-bold'>
                                        {
                                            order.status === 'due' && <>
                                                <label onClick={() => handleCancelConfirm(order)} className="btn btn-danger text-white">cancel</label>
                                            </>
                                        }
                                        {
                                            order.status === 'pending' && <label onClick={() => handleConfirmConfirm(order)} className="btn btn-success  text-white">accept payment</label>
                                        }
                                        {
                                            order.status === 'paid' && "Shipped"
                                        }
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;