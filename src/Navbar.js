import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Nav className="me-auto d-flex justify-content-around w-100">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Movie</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
          <NavDropdown title="Github" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/Shafiga2000">Shafiga Hasanova</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/ulviyyamammadova">Ulviyya Mammdova</NavDropdown.Item>
            <NavDropdown.Item href="#">Isa Salahov</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Youtube</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
