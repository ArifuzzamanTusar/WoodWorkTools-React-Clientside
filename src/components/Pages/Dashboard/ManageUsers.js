import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loading from '../../Templates/Loading';
import DashboardTitle from './DashboardTitle';

import { BsTrash, BsPersonCheckFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import axios from 'axios';

const ManageUsers = () => {



    const { data: users, isLoading, refetch } = useQuery('users', async () => await axios.get('https://wwtools.herokuapp.com/user', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    ));


    // Confirm delete User
    const handleUserDeleteConfirm = async (deleteUser) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to delete " ${deleteUser.name} "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                handleUsertDelete(deleteUser);
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }
    // Confirm MakeAdmin User
    const handleUserToAdminConfirm = async (makeAdmin) => {
        await swal({
            title: "Make me sure!",
            text: `You are going to make Admin to " ${makeAdmin.name} "`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                handleMakeAdmin(makeAdmin);
            } else {
                swal("Action Cancelled, Chill!");
            }
        });

    }

    // Delete Products 
    const handleUsertDelete = async (deleteUser) => {
        const { data } = await axios.delete(`https://wwtools.herokuapp.com/user/${deleteUser.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }
        );
        if (data.deletedCount) {
            toast.success("User Removed successfully..!");
            refetch();
        }

    }
    // Make Admin
    const handleMakeAdmin = async (makeAdmin) => {
        const { data } = await axios.put(`https://wwtools.herokuapp.com/user/admin/${makeAdmin.email}`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }
        );

        if (data.result?.acknowledged) {
            toast.success("Made Admin successfully..!");
            refetch();
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <DashboardTitle title='Manage Users' subtitle='Delete or update users Role' ></DashboardTitle>
            <div className="table-parent ">
                <Table>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.data?.map((user, index) => <tr key={index}>

                                <td >{user.name}</td>
                                <td >{user.email}</td>
                                <td>{user?.role || 'user'}</td>
                                <th >
                                    {
                                        user?.role !== 'admin' ? <>
                                            <Button onClick={() => handleUserDeleteConfirm(user)} className='btn  btn-danger mx-1'> <BsTrash /> Delete</Button>
                                            <Button onClick={() => handleUserToAdminConfirm(user)} className='btn  btn-danger mx-1'> <BsPersonCheckFill /> Make Admin</Button>
                                            {/* <label htmlFor='make-admin-modal' onClick={() => setMakeAdmin(user)} className='btn btn-success btn-sm mr-2'>make admin</label> */}
                                            {/* <label onClick={() => setDeleteUser(user)} htmlFor='delete-user-modal' className='btn btn-error btn-sm '>delete user</label> */}
                                        </>
                                            : <span>Can not take action</span>
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

export default ManageUsers;