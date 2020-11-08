import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./style.css";
import logo from "./clock.svg";

const nav = () => {
  const b = localStorage.getItem('auth') == 'true'
  const handleClick = () => {
    localStorage.setItem('auth', 'false')
  }
  return (
    <Navbar id="navbar" bg="light" expand="lg">
      <Nav.Link href='/'>
        <Navbar.Brand>
          <img src={logo} width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Brand>Hourly</Navbar.Brand>
      </Nav.Link>

        <Nav.Link inline className="ml-auto" href='/register'>
          <Button
            variant="dark"
            style={{ backgroundColor: "purple", opacity: "70%" }}
            onClick={handleClick}
          >
            {b?'Log Out':'Log In'}
          </Button>
        </Nav.Link>
    </Navbar>
  );
};

export default nav;
