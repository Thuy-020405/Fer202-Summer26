
import React from 'react';

function Cart({ items = [], onRemove }) {
	if (!items || items.length === 0) {
		return (
			<div className="container my-4">
				<h3 style={{ color: '#fff' }}>Your cart is empty</h3>
			</div>
		);
	}

	const total = items.reduce((s, it) => s + Number(it.price || 0), 0);

	return (
		<div className="container my-4">
			<h3 style={{ color: '#fff', marginBottom: '16px' }}>Cart</h3>
			<div className="list-group">
				{items.map((it, idx) => (
					<div key={idx} className="list-group-item d-flex justify-content-between align-items-center" style={{ background: '#3a3a3a', color: '#fff', border: 'none' }}>
						<div>
							<div style={{ fontWeight: 600 }}>{it.name}</div>
							<div style={{ color: '#aaa', fontSize: '0.9rem' }}>${it.price}</div>
						</div>
						<div>
							<button className="btn btn-sm btn-outline-light me-2" onClick={() => onRemove && onRemove(it)}>Remove</button>
						</div>
					</div>
				))}
			</div>
			<div className="d-flex justify-content-end align-items-center mt-3" style={{ color: '#fff' }}>
				<strong>Total: </strong>
				<span style={{ marginLeft: '8px', color: '#f5a623' }}>${total.toFixed(2)}</span>
			</div>
		</div>
	);
}

export default Cart;
