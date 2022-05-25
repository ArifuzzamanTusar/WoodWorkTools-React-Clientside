import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import fetchApi from '../../../interceptor';
import Loading from '../../Templates/Loading';
import DashboardTitle from './DashboardTitle';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [editMode, setEditmode] = useState(false);
    console.log(editMode);

    const { data: profile, isLoading, refetch } = useQuery(['profile', user], async () => await fetchApi.get(`/user/${user?.email}`));

    if (loading || isLoading) {
        return <Loading />
    }

    const handleProfile = async (event) => {
        event.preventDefault();
        const userProfile = {
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkdin: event.target.linkdin.value,
        }

        const { data } = await fetchApi.put(`/user/update/${user.email}`, userProfile);
        if (data.acknowledged) {

            toast.success('profile updated successfully')
            refetch();
            setEditmode(false);
        }

    }
    return (
        <div>
            <DashboardTitle title='My Profile' subtitle='Manage My profile' ></DashboardTitle>
            <div className=" mb-5 form-area col-md-6   ">
                <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupEmail" >
                    <Form.Label column sm="3">Name</Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" defaultValue={profile?.data?.name} name='education' disabled />
                    </Col>

                </Form.Group>
                <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupEmail" >
                    <Form.Label column sm="3">Email</Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" defaultValue={profile?.data?.email} name='education' disabled />
                    </Col>

                </Form.Group>

                {/* ========= FORM ======= */}
                <Form onSubmit={handleProfile}>

                    {/* =========== Education ================= */}
                    <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupEmail" >
                        <Form.Label column sm="3">Education</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" defaultValue={profile?.data?.education} name='education' disabled={!editMode} />
                        </Col>

                    </Form.Group>
                    {/* =========== Address ================= */}
                    <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupPassword" >
                        <Form.Label column sm="3">Address</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" defaultValue={profile?.data?.location} name='location' disabled={!editMode} />
                        </Col>

                    </Form.Group>

                    {/* =========== Phone Number ================= */}
                    <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupEmail">
                        <Form.Label column sm="3">Phone Number</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" defaultValue={profile?.data?.phone} name='phone' disabled={!editMode} /></Col>

                    </Form.Group>

                    {/* =========== Linkedin link ================= */}
                    <Form.Group as={Row} className="my-3 p-3 shadow-sm rounded" controlId="formGroupEmail">
                        <Form.Label column sm="3">LinkdIn Profile Link</Form.Label>
                        <Col sm="9">
                            <Form.Control type="url" defaultValue={profile?.data?.linkdin} name='linkdin' disabled={!editMode} />
                        </Col>



                    </Form.Group>

                    {
                        editMode ?
                            <Button className='primary-btn col-6' type="submit">
                                Update Profile
                            </Button>
                            :
                           <></>

                    }







                </Form>

                {
                    !editMode ?
                        <Button onClick={() => setEditmode(true)} className='primary-btn col-6' >
                            Edit Profile
                        </Button>

                        :
                        <></>


                }

            </div>


        </div>
    );
};

export default MyProfile;