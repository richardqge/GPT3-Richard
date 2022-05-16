import logo from '../shopify.png'
import React from 'react'
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'



class Navigation extends Component {

    render() {

        return (

            <div>

                <Navbar bg="success" variant="dark" sticky="top" expand="md" collapseOnSelect>

                    <Navbar.Brand href="/">

                        <img src={logo} width="50px" />

                        USC GPT-3

                    </Navbar.Brand>



                    <Navbar.Toggle />



                    <Navbar.Collapse>

                        <Nav>

                            <Nav.Link href="red-pill"> text-davinci-002 </Nav.Link>

                            <Nav.Link href="blue-pill"> text-curie-001 </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>





                </Navbar>

            </div>

        )

    }

}



export default Navigation