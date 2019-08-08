import React, { Component } from 'react'
import { Navbar,Nav,Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
export default class NavBar extends Component {
    render() {
        return (
            <div >

  <Navbar bg="light" variant="white" style={{height:'40px',}}>
  
  
    <Navbar.Brand href="#Logo" className="navbar" >
    <FontAwesomeIcon color="white"   icon={faBed} />&nbsp;&nbsp;&nbsp;Logo  </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="navlink" href="#Rooms">Rooms</Nav.Link>
      <Nav.Link className="navlink" href="#About">About</Nav.Link>
      <Nav.Link className="navlink" href="#Contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">Book-Now</Button>
    </Form>
  </Navbar>       
       </div>
        )
    }
}
