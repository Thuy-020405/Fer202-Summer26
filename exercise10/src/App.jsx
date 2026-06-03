import { Container, Navbar, Nav, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Website</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Cards */}
      <Container className="mt-4">
        <Row>
          {[1, 2, 3].map((i) => (
            <Col md={4} key={i}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
                <Card.Body>
                  <Card.Title>Card {i}</Card.Title>
                  <Card.Text>Mô tả nội dung card số {i}.</Card.Text>
                  <Button variant="primary">Xem thêm</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        © 2024 My Website
      </footer>
    </>
  );
}
export default App;