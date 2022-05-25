import React from 'react';
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
        }

    }
    return (
        <div>
            <DashboardTitle title='My Profile' subtitle='Manage My profile' ></DashboardTitle>
            <div className=" mb-5 form-area col-md-6  p-5 shadow rounded">
                <Form onSubmit={handleProfile}>

                    {/* =========== Education ================= */}
                    <Form.Group as={Row} className="mb-1" controlId="formGroupEmail">
                        <Form.Label column sm="2">Education</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={profile?.data?.education} />
                        </Col>

                    </Form.Group>
                    {/* =========== Address ================= */}
                    <Form.Group as={Row} className="mb-1" controlId="formGroupPassword">
                        <Form.Label column sm="2">Address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={profile?.data?.location} />
                        </Col>

                    </Form.Group>

                    {/* =========== Phone Number ================= */}
                    <Form.Group as={Row} className="mb-1" controlId="formGroupEmail">
                        <Form.Label column sm="2">Phone Number</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={profile?.data?.phone} /></Col>

                    </Form.Group>

                    {/* =========== Linkedin link ================= */}
                    <Form.Group as={Row} className="mb-1" controlId="formGroupEmail">
                        <Form.Label column sm="2">LinkdIn Profile Link</Form.Label>
                        <Col sm="10">
                            <Form.Control type="url" defaultValue={profile?.data?.linkdin} />
                            </Col>



                    </Form.Group>


                    <Button className='primary-btn col-12' type="submit">
                        Update Profile
                    </Button>



                </Form>

            </div>


        </div>
    );
};

export default MyProfile;