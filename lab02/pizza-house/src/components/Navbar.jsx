import { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

function AppNavbar({ cartCount, onCartClick }) {
  const [search, setSearch] = useState('');

  return (
    <Navbar expand="lg" style={{ background: '#2b2b2b' }} variant="dark">
      <Container fluid className="px-4">

        {/* Brand */}
        <Navbar.Brand href="#" style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>
          Pizza House
        </Navbar.Brand>

        {/* Hamburger mobile */}
        <Navbar.Toggle aria-controls="mainNav" />

        <Navbar.Collapse id="mainNav">
          {/* Nav links */}
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Search bar */}
          <div className="d-flex gap-2">
            <Form.Control
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ height: '30px', fontSize: '13px', width: '180px', borderRadius: '3px 0 0 3px' }}
            />
            <Button variant="danger" style={{ height: '30px', padding: '0 12px', borderRadius: '0 3px 3px 0' }}>
              <i className="bi bi-search"></i>
            </Button>

          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default AppNavbar;