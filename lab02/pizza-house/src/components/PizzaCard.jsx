import { Card, Button, Badge } from 'react-bootstrap';

function PizzaCard({ pizza, onBuy }) {
  return (
    <Card className="h-100 border-0" style={{ background: '#fdfcfc', borderRadius: '8px' }}>

      {/* Ảnh + Badge  */}
      <div style={{ position: 'relative' }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          alt={pizza.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {pizza.badge && (
          <span style={{
            position: 'absolute', top: '10px', left: '0',
            background: '#f5d400', color: '#222',
            fontWeight: '700', fontSize: '11px',
            padding: '3px 10px', textTransform: 'uppercase'
          }}>
            {pizza.badge}
          </span>
        )}
      </div>

      <Card.Body className="d-flex flex-column" style={{ padding: '14px' }}>
        <Card.Title style={{ color: '#0e0e0e', fontWeight: '500' }}>
          {pizza.name}
        </Card.Title>

        {/* Giá */}
        <p className="mb-3">
          {pizza.oldPrice && (
            <span style={{ color: '#aaa', textDecoration: 'line-through', marginRight: '6px' }}>
              ${pizza.oldPrice}
            </span>
          )}
          <span style={{ color: pizza.oldPrice ? '#f5a623' : '#ccc', fontWeight: '500' }}>
            ${pizza.price}
          </span>
        </p>

        {/* Button */}
        <Button
          variant="dark"
          className="w-100 mt-auto"
          onClick={() => onBuy(pizza)}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;