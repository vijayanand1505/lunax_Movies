import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import BootstrapCarousel from "./BootstrapCarousel";

function FirstPage() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            Lunaxz Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#shows">Shows</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#aboutus">About us</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BootstrapCarousel />
    </>
  );
}

export default FirstPage;
