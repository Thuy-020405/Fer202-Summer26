import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BookingForm() {
  return (
    <section style={{ background: '#2b2b2b', padding: '40px 0' }}>
      <Container>
        <h2 className="text-center text-white mb-5" style={{ fontWeight: 400 }}>
          Book Your Table
        </h2>

        <Form className="p-4" style={{ background: '#292929', borderRadius: '12px' }}>
          <Row className="g-3 mb-3">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Your Name *"
                className="rounded-0 bg-white"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="email"
                placeholder="Your Email *"
                className="rounded-0 bg-white"
              />
            </Col>
            <Col md={4}>
              <Form.Select className="rounded-0 bg-white text-secondary">
                <option>Select a Service</option>
                <option value="dinein">Dine-in</option>
                <option value="takeaway">Takeaway</option>
                <option value="event">Event Booking</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Please write your comment"
              className="rounded-0 bg-white"
              style={{ minHeight: '180px' }}
            />
          </Form.Group>

          <div className="d-flex justify-content-start">
            <Button
              variant="warning"
              className="rounded-0 fw-bold text-dark px-4 py-2"
              style={{ minWidth: '160px' }}
            >
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default BookingForm;
