import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Nav className="me-auto d-flex justify-content-around w-100">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Movie</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
          <Nav.Link href="#">Github</Nav.Link>
          <Nav.Link href="#">Youtube</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
