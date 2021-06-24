import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand href="#home">
        <BsHouseFill className="mx-1" />
        BOOKING
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#">Sign up</Nav.Link>
          <Nav.Link href="#">Log in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
