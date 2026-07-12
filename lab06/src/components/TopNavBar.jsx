import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function TopNavBar() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/news">
            News
          </Nav.Link>
          <Nav.Link as={NavLink} to="/quizzes">
            Quiz
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;