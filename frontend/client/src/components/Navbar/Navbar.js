import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import './style.css'

const nav = () => {
  return (
    <Navbar id="navbar" bg="light" expand="lg">
      <Navbar.Brand>Hourly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav inline className="ml-auto">
          {/*<p id="greeting">Hi, FirstName LastName!</p>*/}
          {/*<i class="fas fa-user-circle"></i>*/}
          <Button>Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default nav