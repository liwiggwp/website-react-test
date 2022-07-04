import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Container, Button } from 'react-bootstrap'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import logo from './logo.png'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        {/* <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Test React
                        </Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                {/* <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link> */}
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        {/* <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                        <Route exact path="/blog" element={<Blog/>}/> */}
                    </Routes>
                </Router>
            </>
        )
    }
}