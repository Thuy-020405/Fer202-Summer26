import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PizzaList from './components/PizzaList';
import BookingForm from './components/BookingForm';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <PizzaList onBuy={(pizza) => setCart([...cart, pizza])} />
      <BookingForm />
    </div>
  );
}

export default App;