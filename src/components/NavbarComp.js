import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Search } from './Search';
import Home from '../pages/Home';
import DCS from '../pages/DCS';
import MSFS2020 from '../pages/MSFS2020';
import AssettoCorsa from '../pages/AssettoCorsa';
import ACCompetizione from '../pages/ACCompetizione';
import Rfactor2 from '../pages/Rfactor2';
import MusicProd from '../pages/MusicProd';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router basename="/myfavmods">
                <div>
                    {/* <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/"><i className='bx bx-extension logo'></i><span className='logoText'>myfavmods</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100%' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <NavDropdown title="Flight Sim" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/dcs">DCS World</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/msfs2020">MSFS 2020</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Motor Sim" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/assettocorsa">Assetto Corsa</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/rfactor2">rFactor 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/musicproduction">Music Production</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            <Search/>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar> */}


                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container fluid>
                            <Navbar.Brand as={Link} to="/"><i className='bx bx-extension logo'></i><span className='logoText'>myfavmods</span></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                                <NavDropdown title="Flight Sim" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/dcs" href="/dcs">DCS World</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/msfs2020" href="/msfs2020">MSFS 2020</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Motor Sim" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/assettocorsa" href="/assettocorsa">Assetto Corsa</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/accompetizione" href="/accompetizione">Assetto Corsa Competizione</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/rfactor2" href="/rfactor2">rFactor 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/musicproduction" href="/musicproduction">Music Production</Nav.Link>
                            </Nav>
                            <Search/>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>


                </div>
                <div>
                    <Routes>
                        <Route path="*" element={<div><h1>404 NOT FOUND</h1></div>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dcs" element={<DCS/>}/>
                        <Route path="/msfs2020" element={<MSFS2020/>}/>
                        <Route path="/rfactor2" element={<Rfactor2/>}/>
                        <Route path="/assettocorsa" element={<AssettoCorsa/>}/>
                        <Route path="/accompetizione" element={<ACCompetizione/>}/>
                        <Route path="/musicproduction" element={<MusicProd/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}
