import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from './PizzaCard';

const pizzas = [
  { id: 1, name: 'Margherita Pizza', price: '24.00', oldPrice: '40.00', badge: 'SALE', image: '/Images/pizza1.jpg' },
  { id: 2, name: 'Mushroom Pizza',   price: '25.00', oldPrice: null,     badge: null,   image: '/Images/pizza2.jpg' },
  { id: 3, name: 'Hawaiian Pizza',   price: '30.00', oldPrice: null,     badge: 'NEW',  image: '/Images/pizza3.jpg' },
  { id: 4, name: 'Pesto Pizza',      price: '30.00', oldPrice: '50.00', badge: 'SALE', image: '/Images/pizza4.jpg' },
];

function PizzaList({ onBuy }) {
  return (
    <section style={{ background: '#2b2b2b', padding: '40px 0' }}>
      <Container>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Our Menu</h2>
        {/* Row + Col */}
        <Row xs={1} sm={2} md={4} className="g-3">
          {pizzas.map(pizza => (
            <Col key={pizza.id}>
              <PizzaCard pizza={pizza} onBuy={onBuy} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PizzaList;