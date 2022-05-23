import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Customlink from '../../../Utilities/Customlink';

const Header = () => {
    return (
        <Navbar  collapseOnSelect expand="lg" className='primary-bg' sticky="top" >
            <Container className=''>
                <Navbar.Brand >
                    <Customlink to={'/'}> <img width={150} src='https://res.cloudinary.com/tusar/image/upload/v1651940469/gpu-point/gpu-point_zciihy.webp' alt="" /> </Customlink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Customlink to={'/'}>Home</Customlink>
                        <Customlink to={'/about'}>About</Customlink>
                        <Customlink to={'/blog'}>Blog</Customlink>


                    </Nav>
                    <Nav>
                        {/* {
                            user ?
                                <NavDropdown title={username ? "Welcome! " + username : "Welcome!"} id="collasible-nav-dropdown">

                                    <NavDropdown.Item > <Customlink to={'/manage-inventories'}>Manage Inventories</Customlink> </NavDropdown.Item>
                                    <NavDropdown.Item > <Customlink to={'/add-products'}>Add Products</Customlink> </NavDropdown.Item>
                                    <NavDropdown.Item > <Customlink to={'/my-products'}>My Products</Customlink> </NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <div onClick={() => handleSignOut()} className="btn text-center text-white dropdown-item "><FaPowerOff /> Log Out</div>
                                </NavDropdown>

                                :
                                <Link to={'/login'} className='btn btn-outline-light'> Get Started Now</Link>


                        } */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;