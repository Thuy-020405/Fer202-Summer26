import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Neapolitan Pizza',
    desc: 'If you are looking for a traditional Italian pizza, this is the best option!',
    image: '/Images/pizza1.jpg',
  },
  {
    id: 2,
    title: 'Pepperoni Pizza',
    desc: 'Classic American style with loads of pepperoni and melted cheese.',
    image: '/Images/pizza2.jpg',
  },
  {
    id: 3,
    title: 'BBQ Chicken Pizza',
    desc: 'Smoky BBQ sauce, grilled chicken, and caramelized onions.',
    image: '/Images/pizza3.jpg',
  },
  {
    id: 4,
    title: 'Seafood Supreme Pizza',
    desc: 'Loaded with fresh shrimp, squid, and melted cheese for a delicious seafood flavor.',
    image: '/Images/pizza4.jpg',
  },
  {
    id: 5,
    title: 'Cheese Lover Pizza',
    desc: 'A perfect choice for cheese lovers with rich mozzarella and a crispy golden crust.',
    image: '/Images/pizza5.jpg',
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển slide sau 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <div id="banner" className="carousel slide" style={{ position: 'relative' }}>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-item ${i === current ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="d-block w-100"
              style={{ height: '500px', objectFit: 'cover', filter: 'brightness(0.55)' }}
            />
            {/* Text overlay */}
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-end"
                 style={{ bottom: '60px' }}>
              <h2 className="fw-bold">{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút prev */}
      <button className="carousel-control-prev" onClick={prev}>
        <span className="carousel-control-prev-icon" />
      </button>

      {/* Nút next */}
      <button className="carousel-control-next" onClick={next}>
        <span className="carousel-control-next-icon" />
      </button>

      {/* Dashes */}
      <div style={{ position: 'absolute', bottom: '20px', width: '100%',
                      display: 'flex', justifyContent: 'center', gap: '6px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '30px', height: '3px', borderRadius: '2px', border: 'none',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', padding: 0
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default Banner;