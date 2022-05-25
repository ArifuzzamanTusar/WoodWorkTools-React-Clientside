import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Customlink from '../../../Utilities/Customlink';
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const username = user?.displayName;

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <Navbar  collapseOnSelect expand="lg" className='primary-bg' sticky="top" >
            <Container className=''>
                <Navbar.Brand >
                    <Customlink to={'/'}> WOOD WORK TOOLS </Customlink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Customlink to={'/'}>Home</Customlink>
                        <Customlink to={'/products'}>Products</Customlink>
                        <Customlink to={'/about'}>About</Customlink>
                        <Customlink to={'/portfolio'}>My Portfolio</Customlink>
                        <Customlink to={'/blog'}>Blog</Customlink>

                        {
                            user ?
                                <Customlink to={'/dashboard/my-profile'}>Dashboard</Customlink>
                                :
                                <></>
                        }


                    </Nav>
                    <Nav>
                        {
                            user ?
                                <NavDropdown title={username ? "Welcome! " + username : "Welcome!"} id="collasible-nav-dropdown">

                                    <NavDropdown.Item > <Customlink to={'/dashboard/my-profile'}>Dashboard</Customlink> </NavDropdown.Item>
                                    <NavDropdown.Item > <Customlink to={'/dashboard/my-orders'}>My Orders</Customlink> </NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <div onClick={() => handleSignOut()} className="btn text-center text-white dropdown-item "><FaPowerOff /> Log Out</div>
                                </NavDropdown>

                                :
                                <Customlink to={'/login'} className='btn btn-outline-light'> Login</Customlink>


                        }
                        


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;